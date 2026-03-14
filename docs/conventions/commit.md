# Commit Convention (Conventional Commits)

## Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Basic Structure
- **type**: Type of commit (required)
- **scope**: Scope of changes (optional)
- **subject**: Commit title in Korean (required, within 50 characters)
- **body**: Detailed description (optional)
- **footer**: Issue reference, Breaking Changes, etc. (optional)

---

## Type Categories

| Type | Description | Example |
|------|-------------|---------|
| `feat` | New feature | feat: 게임 시작 화면 구현 |
| `fix` | Bug fix | fix: 카드 선택 시 중복 클릭 방지 |
| `docs` | Documentation changes (no code change) | docs: README에 설치 방법 추가 |
| `style` | Code formatting, missing semicolons (no logic change) | style: 들여쓰기 통일 |
| `refactor` | Code refactoring (no feature change) | refactor: 카드 데이터 구조 개선 |
| `test` | Test code addition/modification | test: 점수 계산 로직 테스트 추가 |
| `chore` | Build, config file changes | chore: .gitignore 업데이트 |
| `perf` | Performance improvement | perf: 카드 렌더링 최적화 |
| `design` | UI/UX design changes | design: 카드 선택 애니메이션 개선 |

---

## Scope Examples

Project-specific scopes:

- `planner`: Planning/policy documents
- `developer`: Development code
- `qa`: QA related
- `ui`: UI components
- `logic`: Game logic
- `data`: Data files (cards, results)
- `config`: Configuration files

---

## Subject Writing Rules

1. Use imperative mood, present tense (Korean: "변경함" ✅, "변경했음" ❌)
2. First letter lowercase (for English words)
3. No period at the end
4. Keep it concise within 50 characters
5. **Write in Korean**

### Good Examples
```
feat(ui): 카드 선택 화면 구현
fix(logic): 결과 계산 시 점수 합산 오류 수정
docs(planner): 기획서에 UX 시나리오 추가
```

### Bad Examples
```
feat: 화면 만듦  (too vague)
fix: 버그 수정했습니다.  (past tense, period)
카드 추가  (no type)
```

---

## Commit Timing Rule (MANDATORY)

**Every completed task unit MUST be committed immediately.** Do not accumulate multiple tasks without committing.

### When to Commit
- After each pipeline stage completes (Planner → commit, Developer → commit, QA → commit)
- After each bug fix round in QA Loop
- After docs changes (convention updates, guide additions, optimization)
- After any configuration change (AGENTS.md, tsconfig, vite.config, etc.)

### Enforcement
- Pipeline Gate verification includes commit check
- No task is considered "done" until committed
- If multiple files change for one logical task, they go in ONE commit (not per-file)

---

## Commit Unit Principles

### 1. Group by Large Task Units
Group commits by meaningful feature units.

#### ✅ Good Examples
```
feat(planner): 기획서 및 정책 문서 작성
- planning.md 작성
- policy.md 작성
```

```
feat(developer): 게임 코어 기능 구현
- index.html, style.css, main.js 생성
- 카드 선택 로직 구현
- 결과 계산 로직 구현
```

#### ❌ Bad Examples
```
feat: planning.md 작성
feat: policy.md 작성
(→ should be grouped into one task)
```

### 2. Task-based Criteria
- **Planning Phase**: planning.md + policy.md → 1 commit
- **Development Phase**: Group by feature (e.g., main screen, game screen, result screen)
- **QA Phase**: qa-report.md → 1 commit
- **Bug Fixes**: Group related bugs fixed together into one commit

### 3. Avoid Overly Large Commits
Consider splitting by feature if changes exceed 100 lines in one commit

---

## Body Writing Guide (Optional)

Write detailed description when needed (in Korean):

```
feat(developer): 게임 코어 기능 구현

- 카드 데이터 구조: {id, optionA, optionB, category}
- 결과 계산: category별 점수 합산 후 최다 선택 유형 반환
- 애니메이션: 카드 선택 시 fade-out 효과 적용
```

---

## Footer Writing Guide (Optional)

### Breaking Changes
```
feat(data): 카드 데이터 구조 변경

BREAKING CHANGE: cards.js의 데이터 구조가 변경되었습니다.
기존: {option1, option2}
변경: {optionA, optionB, category}
```

### Issue References
```
fix(logic): 결과 계산 시 점수 합산 오류 수정

Closes #123
```

---

## Practical Examples

### Example 1: Planning Phase
```
docs(planner): 게임 기획서 및 정책 문서 작성

- planning.md: 게임 개요, 플로우, 카드 콘텐츠 20개, 결과 유형 4가지 정의
- policy.md: 콘텐츠 가이드라인, 점수 계산 정책, 예외 처리 정책 정의
```

### Example 2: Development Phase
```
feat(developer): 게임 UI 및 코어 로직 구현

- index.html: 메인/게임/결과 화면 구조
- style.css: 반응형 레이아웃, 카드 애니메이션
- main.js: 게임 상태 관리, 카드 선택 로직, 결과 계산
- data/cards.js: 밸런싱 게임 카드 20개
- data/results.js: 결과 유형 4가지
```

### Example 3: Bug Fix
```
fix(logic): 카드 중복 선택 및 결과 계산 오류 수정

- 카드 선택 시 disabled 처리 추가
- 결과 계산 시 undefined 체크 로직 추가
```

### Example 4: QA
```
docs(qa): QA 검증 리포트 작성

- 기능/콘텐츠/UI/엣지케이스 검증 완료
- 버그 3건 발견 (중복 클릭, 모바일 레이아웃, 진행률 표시)
```

---

## Commit Strategy for This Project

1. **Planning Complete**: 1 commit with `docs(planner)` type
2. **Development Complete**: Group by feature with `feat(developer)` type (max 2-3 commits)
3. **QA Complete**: 1 commit with `docs(qa)` type
4. **Bug Fixes**: Group related bugs with `fix` type
5. **Documentation Improvements**: Use `docs` type

---

## References
- [Conventional Commits Official Documentation](https://www.conventionalcommits.org/)
