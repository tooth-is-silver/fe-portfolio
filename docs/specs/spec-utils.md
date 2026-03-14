# Utility Functions Spec — fe-portfolio

> 목적: 순수 함수로 분리된 유틸리티의 스펙 정의. 구현 전 스펙 작성 → 테스트 작성 → 구현 순서로 진행.

---

## 1. `getActiveSection`

**위치**: `src/utils/scroll.ts`  
**목적**: 현재 스크롤 위치를 기준으로 활성화된 섹션 ID를 반환 (Nav 하이라이트용)

### 인터페이스

```typescript
interface SectionRect {
  id: string;       // 섹션 ID (예: "about", "skills")
  top: number;      // 섹션 상단 offsetTop
  height: number;   // 섹션 높이
}

function getActiveSection(
  scrollY: number,         // 현재 window.scrollY
  sections: SectionRect[], // 섹션 목록
  offset?: number          // 헤더 높이 등 보정값 (기본 60)
): string | null
```

### 반환값
- 현재 뷰포트 상단에 가장 가까운 섹션의 `id`
- 어떤 섹션도 해당 없으면 `null`

### 엣지케이스
| 케이스 | 기대 결과 |
|--------|----------|
| `sections`가 빈 배열 | `null` |
| 페이지 최상단 (scrollY = 0) | 첫 번째 섹션 id |
| 페이지 최하단 | 마지막 섹션 id |
| scrollY가 음수 | `null` |
| 섹션이 1개뿐 | 항상 그 섹션 id |

### 테스트 케이스

```typescript
// spec-utils.test.ts 기반

describe('getActiveSection', () => {
  const sections = [
    { id: 'hero',     top: 0,    height: 800 },
    { id: 'skills',   top: 800,  height: 600 },
    { id: 'projects', top: 1400, height: 700 },
    { id: 'contact',  top: 2100, height: 400 },
  ]

  test('빈 섹션 배열이면 null 반환', () => {
    expect(getActiveSection(0, [])).toBe(null)
  })

  test('scrollY 0 → 첫 번째 섹션', () => {
    expect(getActiveSection(0, sections)).toBe('hero')
  })

  test('scrollY가 두 번째 섹션 진입 후 → skills', () => {
    expect(getActiveSection(860, sections, 60)).toBe('skills')
  })

  test('scrollY가 음수 → null', () => {
    expect(getActiveSection(-10, sections)).toBe(null)
  })

  test('scrollY가 마지막 섹션 → contact', () => {
    expect(getActiveSection(2200, sections, 60)).toBe('contact')
  })
})
```

---

## 2. `truncateText`

**위치**: `src/utils/string.ts`  
**목적**: 텍스트를 지정 길이로 자르고 말줄임표 추가 (프로젝트 설명 등)

### 인터페이스

```typescript
function truncateText(text: string, maxLength: number): string
```

### 반환값
- `text.length <= maxLength`이면 원본 반환
- 초과하면 `text.slice(0, maxLength) + '…'`

### 엣지케이스
| 케이스 | 기대 결과 |
|--------|----------|
| 빈 문자열 | `''` |
| maxLength가 0 | `'…'` |
| maxLength가 음수 | `''` (또는 throw — 구현 시 결정) |
| 정확히 maxLength와 같은 길이 | 원본 반환 (자르지 않음) |

### 테스트 케이스

```typescript
describe('truncateText', () => {
  test('길이 이하이면 그대로 반환', () => {
    expect(truncateText('Hello', 10)).toBe('Hello')
  })

  test('길이 초과 시 말줄임표 추가', () => {
    expect(truncateText('Hello World', 5)).toBe('Hello…')
  })

  test('빈 문자열', () => {
    expect(truncateText('', 10)).toBe('')
  })

  test('정확히 maxLength와 같은 길이', () => {
    expect(truncateText('Hello', 5)).toBe('Hello')
  })

  test('maxLength 0', () => {
    expect(truncateText('Hello', 0)).toBe('…')
  })
})
```

---

## 3. `groupBy`

**위치**: `src/utils/array.ts`  
**목적**: 배열을 키 기준으로 그룹핑 (스킬 카테고리 그룹핑 등)

### 인터페이스

```typescript
function groupBy<T>(
  items: T[],
  keyFn: (item: T) => string
): Record<string, T[]>
```

### 엣지케이스
| 케이스 | 기대 결과 |
|--------|----------|
| 빈 배열 | `{}` |
| 모든 항목이 같은 키 | 키 1개짜리 객체 |
| keyFn이 빈 문자열 반환 | `''` 키로 그룹핑 |

### 테스트 케이스

```typescript
describe('groupBy', () => {
  test('카테고리별 그룹핑', () => {
    const items = [
      { name: 'React', category: 'Frontend' },
      { name: 'Git',   category: 'Tools' },
      { name: 'Vite',  category: 'Frontend' },
    ]
    const result = groupBy(items, (i) => i.category)
    expect(result['Frontend']).toHaveLength(2)
    expect(result['Tools']).toHaveLength(1)
  })

  test('빈 배열', () => {
    expect(groupBy([], (i) => i)).toEqual({})
  })
})
```

---

## 구현 우선순위

| 함수 | 우선순위 | 이유 |
|------|---------|------|
| `getActiveSection` | 높음 | Nav 활성화 기능에 필요 |
| `truncateText` | 중간 | 프로젝트 설명 UX |
| `groupBy` | 낮음 | Skills 데이터가 이미 그룹핑된 형태 |

---

## 테스트 실행

```bash
npm run test          # 전체 테스트 실행
npm run test:watch    # watch 모드
npm run test:coverage # 커버리지
```

> Vitest 미설치 시: `npm install -D vitest`  
> package.json scripts에 추가: `"test": "vitest run", "test:watch": "vitest"`
