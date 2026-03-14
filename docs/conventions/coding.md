# Coding Convention

> ⚠️ CSS 파일명은 **소문자** (lowercase). 예: `header.css`, `projects.css`

---

## Document Language Policy

| Category | Language | Target Files |
|----------|----------|-------------|
| Public-facing (presentation/external) | **Korean** | `README.md`, `case-study.md`, `mid-review.md`, `progress.md` |
| Agent-consumed (internal) | **English** | `AGENTS.md`, `docs/prompt-*.md`, `docs/coding-convention.md`, `docs/commit-convention.md`, `docs/guides/*` |
| Source code comments | **Korean** | `src/**` |
| Commit message subject | **Korean** | Git commits |

---

## Core Principles

Good frontend code is **easy to change**. We evaluate code quality based on 4 criteria:

1. **Readability** — Minimize context that must be held in mind at once
2. **Predictability** — Behavior should be predictable from names, parameters, and return values
3. **Cohesion** — Code that changes together should live together
4. **Coupling** — Minimize the impact scope of modifications

> These 4 criteria can conflict with each other. Prioritize thoughtfully based on the current situation.

---

## Key Decisions Summary

| Item | Decision | Reason |
|------|----------|--------|
| Type declaration | Use `interface` (`type` only for union/intersection) | Extensibility, consistency |
| Internal Props | Name as `Props` | Brevity |
| Exported Props | Name as `ComponentNameProps` | Clear identification |
| Props design | 1:1 mapping with UI | Self-documenting components |
| Folder structure | Flat structure matching project scale | No Over-Separation |
| Abstraction | Rule of Three (abstract on 3rd repetition) | No Premature Abstraction |
| File splitting | Do not split files under 300 lines | Navigation cost > splitting benefit |
| Code comments | **Korean** | Team communication |
| Accessibility | WCAG 2.1 AA compliance | Baseline requirement |
| State management | Choose tool by state characteristics | → `docs/guides/state-management.md` |
| SEO / Hydration | React SPA approach + Next.js preparation | → `docs/guides/seo-hydration.md` |

---

## Simplicity & Pragmatism

- **Rule of Three**: Copy-paste up to 2 times. Abstract on the 3rd repetition.
- **No Premature Abstraction**: "Might use it later" is not a reason to abstract.
- **No Over-Separation**: No deep directory structures for small projects.

---

## Readability

- **Early return** to minimize context (guard clauses over nested if)
- **Name complex conditions**: `const isEligible = age >= 65 || isMember;`
- **Name magic numbers**: `const MAX_CARD_COUNT = 20;`
- **Ternary operators for simple cases only** (no nested ternaries)
- **Compare left-to-right**: `if (age >= 18)` (✅) vs `if (18 <= age)` (❌)

---

## Predictability

- **Same return type for similar functions**: Use `User | null` consistently (no mixing undefined)
- **No hidden side effects**: What a function does must be visible from its name or code
- **Alias on naming conflicts**: `import { fetchUser as fetchUserAPI } from './api'`

---

## Cohesion & Coupling

- **Colocation**: Files that change together belong in the same folder
- **Single responsibility**: One function/hook handles one concern only
- **Props drilling 2+ levels** → Consider Context API or state management tool
- **Allow code duplication** if it reduces coupling (no blind DRY)

---

## Accessibility

All UI must work with keyboard, screen readers, and diverse environments.

| Item | Standard |
|------|----------|
| Semantic HTML | No `div`/`span` abuse — use meaningful tags |
| Keyboard | Tab navigation, Enter/Space actions, `focus-visible` outline |
| Focus Management | Move focus to appropriate element after screen transitions |
| Color Contrast | **WCAG 2.1 AA — minimum 4.5:1** |
| State indication | Do not rely on color alone (use border, scale, icon together) |
| Motion | Support `prefers-reduced-motion` media query |
| ARIA | Use `aria-live` for dynamic content |
| Touch Target | Minimum **44×44px** |

---

## Guides (reference when needed)

| Guide | File | When to reference |
|-------|------|-------------------|
| State Management | `docs/guides/state-management.md` | When designing/changing state |
| SEO & Hydration | `docs/guides/seo-hydration.md` | When addressing SEO or migrating to Next.js |

---

## References

- [Frontend Fundamentals - Code Quality](https://frontend-fundamentals.com/code-quality/code/)
- [Feature-Sliced Design](https://feature-sliced.design/)
