# SEO & Hydration Guide

> This project is a React SPA, but these guidelines are documented for Next.js migration or other projects.

---

## SEO in React SPA

React client-side apps serve an empty `<div id="root">` by default, so crawlers cannot read the content.

### Meta Tags (Required)

Use `react-helmet-async` or similar to dynamically manage per-page meta tags.

```tsx
import { Helmet } from "react-helmet-async";

function ResultPage({ result }) {
  return (
    <>
      <Helmet>
        <title>{result.name} — How About This Partner?</title>
        <meta name="description" content={result.description} />
        <meta property="og:title" content={`${result.emoji} ${result.name}`} />
        <meta property="og:description" content={result.description} />
        <meta property="og:image" content={`/og/${result.type}.png`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://example.com/result/${result.type}`} />
      </Helmet>
      <ResultContent result={result} />
    </>
  );
}
```

### Semantic HTML

React components must also use semantic tags. No `div` soup.

```tsx
// ✅ Good
<main>
  <section aria-label="Game Result">
    <h1>{result.name}</h1>
    <p>{result.description}</p>
  </section>
</main>

// ❌ Bad
<div className="wrapper">
  <div className="section">
    <div className="title">{result.name}</div>
  </div>
</div>
```

### Structured Data (JSON-LD)

```tsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "How About This Partner?",
    "description": "Discover your dating style through 20 balancing questions",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web"
  })}
</script>
```

### Pre-rendering / SSG Considerations

If SEO matters for a pure client SPA:
- `react-snap`: Generate static HTML by crawling after build
- `prerender.io`: Serve pre-rendered pages only to crawlers
- If SEO is critical, consider **Next.js migration**

---

## Next.js SSR + Hydration Issues

Layout mismatches during SSR → client Hydration significantly harm UX.

### Preventing Layout Shift

When server-rendered HTML differs from client Hydration result, **CLS (Cumulative Layout Shift)** occurs.

```tsx
// ❌ Bad — server/client mismatch causes layout shift
function UserGreeting() {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(localStorage.getItem("name") || "");
  }, []);
  return <h1>Hello{name ? `, ${name}` : ""}!</h1>;
}

// ✅ Good — skeleton reserves space before transition
function UserGreeting() {
  const [name, setName] = useState<string | null>(null);
  useEffect(() => {
    setName(localStorage.getItem("name") || "");
  }, []);

  if (name === null) return <Skeleton width={200} height={32} />;
  return <h1>Hello{name ? `, ${name}` : ""}!</h1>;
}
```

### Skeleton UI Principles

Areas displaying client-only data must use **skeletons matching the actual content dimensions**.

```tsx
// ✅ Good — same dimensions as actual content
function ResultCard({ result }: { result: Result | null }) {
  if (!result) {
    return (
      <div className="result-card">
        <Skeleton width={64} height={64} borderRadius="50%" />
        <Skeleton width={180} height={28} />
        <Skeleton width="100%" height={60} />
      </div>
    );
  }
  return (
    <div className="result-card">
      <span className="emoji">{result.emoji}</span>
      <h2>{result.name}</h2>
      <p>{result.description}</p>
    </div>
  );
}

// ❌ Bad — spinner with different dimensions
if (!result) return <Spinner />;  // 20px → jumps to 200px on content load
```

### Preventing Hydration Mismatch

APIs inaccessible on server (`window`, `localStorage`, `navigator`) must be isolated via `useEffect` or `dynamic import`.

```tsx
// ✅ Good — isolated with useEffect
function ShareButton() {
  const [canShare, setCanShare] = useState(false);
  useEffect(() => {
    setCanShare(typeof navigator.share === "function");
  }, []);

  return canShare
    ? <button onClick={() => navigator.share(shareData)}>Share</button>
    : <button onClick={copyToClipboard}>Copy Link</button>;
}

// ✅ Good — dynamic import
import dynamic from "next/dynamic";
const GameBoard = dynamic(() => import("./GameBoard"), {
  ssr: false,
  loading: () => <GameBoardSkeleton />,
});

// ❌ Bad — accessing window on server
function ShareButton() {
  const canShare = typeof window !== "undefined" && navigator.share;
  // Server: false, Client: true → mismatch
}
```

### Image/Font Layout Shift

```tsx
// ✅ Good — explicit dimensions
import Image from "next/image";
<Image src="/og/romantic.png" alt="Romantic Dreamer" width={400} height={300} />

// ✅ Good — prevent font loading layout shift
import { Pretendard } from "next/font/local";
const pretendard = Pretendard({ display: "swap", adjustFontFallback: true });
```

---

## Hydration Checklist

| Item | Approach |
|------|----------|
| Client-only data (localStorage, auth, etc.) | `useEffect` + skeleton |
| Browser API dependency (`window`, `navigator`) | `useEffect` or `dynamic(() => ..., { ssr: false })` |
| Images | Specify `width`/`height` or use `next/image` |
| Fonts | `font-display: swap` + fallback size adjustment |
| Conditional rendering (server ≠ client) | Initial value matches server → update in `useEffect` |
| Date/time display | Render UTC on server → convert to local on client (use skeleton) |
