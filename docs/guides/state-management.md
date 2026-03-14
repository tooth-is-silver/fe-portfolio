# State Management Guide

> `useState` is not always the answer. Choose the right tool based on the nature of the state.

---

## State Types and Selection Criteria

| State Nature | Tool | Decision Criteria |
|-------------|------|-------------------|
| Component-internal UI state | `useState` | Used only in this component, OK to reset on refresh? |
| Local state shared across components | Context API | Shared only within a specific subtree? Not global? |
| State expressible via URL | URL Query Parameter | Should users be able to revisit this page with this state? |
| Data from server | React Query | Need caching, revalidation, synchronization of server data? |
| App-wide global state | Zustand / Jotai etc. | Accessed anywhere in the app, exists only on client? |

---

## State Selection Flowchart

```
Does this data come from the server?
├─ Y → React Query
└─ N → Should the user be able to revisit/share this page with this state?
       ├─ Y → URL Query Parameter
       └─ N → Is this state needed by multiple components?
              ├─ Y → Within the same subtree?
              │      ├─ Y → Context API
              │      └─ N → Zustand / Jotai (global state)
              └─ N → useState
```

---

## useState — Only for the simplest cases

Use only for state that lives in one component and can be lost on refresh.

```tsx
// ✅ Good — transition state is UI-local to this component
function GameScreen() {
  const [isTransitioning, setIsTransitioning] = useState(false);
}

// ❌ Bad — state needed by multiple components managed with useState and passed via props
function App() {
  const [scores, setScores] = useState({ romantic: 0, steady: 0, free: 0, social: 0 });
  return <GameScreen scores={scores} setScores={setScores} />;
  // GameScreen → CardList → Card — props drilling
}
```

---

## Context API — Local state sharing

Context API is **not a global state management tool**. It's for sharing state within a specific subtree without props drilling.

**Questions before using:**
1. Are the components that need this state within the same subtree?
2. Are you passing props 2+ levels deep?
3. Does this state change frequently? (Frequent changes make Context inefficient — all subscribed components re-render)

```tsx
// ✅ Good — sharing state within the game screen subtree via Context
interface GameContextValue {
  scores: Scores;
  currentCard: number;
  selectOption: (type: string) => void;
}

const GameContext = createContext<GameContextValue | null>(null);

function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used within GameProvider");
  return ctx;
}

function GameProvider({ children }: { children: ReactNode }) {
  const [scores, setScores] = useState(initialScores);
  const [currentCard, setCurrentCard] = useState(0);

  const selectOption = (type: string) => {
    setScores((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    setCurrentCard((prev) => prev + 1);
  };

  return (
    <GameContext.Provider value={{ scores, currentCard, selectOption }}>
      {children}
    </GameContext.Provider>
  );
}

// ❌ Bad — abusing Context as global state management
const AppContext = createContext({
  user: null, theme: "light", scores: {}, cards: [], results: [],
  setUser: () => {}, setTheme: () => {}, setScores: () => {},
});
```

---

## URL Query Parameter — Shareable and revisitable state

URL is state. Use URL parameters when **all** of the following are true:

1. Can users revisit this page? (bookmarks, back button, link sharing)
2. Should this state persist on revisit? (filters, sorting, search terms, page number)
3. Is this state a core parameter of the domain? (product category filter = YES, modal open state = NO)

```tsx
// ✅ Good — search filters belong in the URL
// /results?type=romantic
function ResultPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "romantic";
  return <ResultDetail type={type} />;
}

// ❌ Bad — state that should be in URL managed with useState
function CardListPage() {
  const [page, setPage] = useState(1);
  // Refreshing resets to page 1, sharing link is impossible
}
```

---

## React Query — Server state management

React Query is not a "data fetching library" — it's a **server state management tool**.

```
Fetch data from server
  → React Query manages cache + state
    → React subscribes and renders
```

### Basic Usage Pattern

```tsx
// ✅ Good — declaratively consume server data
function GameResultPage({ resultType }: { resultType: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["result", resultType],
    queryFn: () => fetchResult(resultType),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <ResultSkeleton />;
  if (error) return <ErrorMessage error={error} />;
  return <ResultCard result={data} />;
}

// ❌ Bad — manual fetching with useEffect + useState
function GameResultPage({ resultType }: { resultType: string }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResult(resultType).then(setData).finally(() => setLoading(false));
  }, [resultType]);
  // No caching, no deduplication, race condition risk
}
```

### Query Key Design

```tsx
// ✅ Good — hierarchical and predictable key structure [domain, ...identifiers]
useQuery({ queryKey: ["cards"] });
useQuery({ queryKey: ["cards", cardId] });
useQuery({ queryKey: ["results", resultType] });
useQuery({ queryKey: ["cards", { page, sort }] });

// Batch invalidation of related cache
queryClient.invalidateQueries({ queryKey: ["cards"] });
```

### API Function Separation

```typescript
// ✅ Good — API functions independent of React Query
// api/results.ts
export async function fetchResult(type: string): Promise<Result> {
  const res = await fetch(`/api/results/${type}`);
  if (!res.ok) throw new Error("Failed to load result");
  return res.json();
}

// hooks/useResult.ts
export function useResult(type: string) {
  return useQuery({
    queryKey: ["results", type],
    queryFn: () => fetchResult(type),
  });
}
```

### Mutation Pattern

```tsx
function useSubmitScore() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: submitScore,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["scores"] });
    },
  });
}
```

---

## Props Passing Checklist

Before passing props down, verify:

1. Is the intermediate component just passing props without using them? → Switch to Context
2. Is it drilling 2+ levels deep? → Consider Context
3. How frequently does this state change? → If frequent, consider Zustand/Jotai
