# fe-portfolio — Agent Configuration

프론트엔드 개발자 이가은의 포트폴리오 사이트.

> **작업 시작 전**: `docs/index.md` 먼저 읽고 필요한 문서만 선택적으로 읽는다.

---

## 기술 스택

- React 19 + TypeScript + Vite
- 순수 CSS (컴포넌트별 파일 분리)
- 폰트: Pretendard Variable
- 테스트: Vitest

---

## 핵심 규칙 요약

### 브랜치/PR
- `feature/섹션명`, `fix/이슈번호-설명` 브랜치
- **PR = 태스크(관심사) 단위** — 푸시 횟수와 무관
- 태스크 완료 시 PR 생성 → 리뷰 → 머지

### PR 리뷰 순서
```
PR 생성 → 자체 코드 리뷰 → 이슈 등록 → 수정 커밋 → 머지
```
- 즉시 수정 (bug): 현재 PR에서 해결
- 코드 품질 (refactor): 별도 이슈 등록
- 기능 추가 (enhancement): 백로그 이슈 등록

**리뷰 체크리스트:**
- [ ] 모바일 퍼스트 미디어 쿼리 (min-width)
- [ ] 순수 함수 → `src/utils/`로 분리했는지
- [ ] CSS 하드코딩 컬러 없는지 (CSS 변수 사용)
- [ ] 터치 타겟 44px 이상
- [ ] TypeScript `any` 없는지
- [ ] 불필요한 주석/console.log 없는지

### 이슈
- 이슈 해결 시 `Closes #번호` 커밋/PR 메시지에 포함
- 레이블: `bug`, `enhancement`, `refactor`, `question`

### 유틸 & 테스트
- 순수 함수 → `src/utils/` 분리 필수
- 스펙 먼저 (`docs/specs/spec-utils.md`) → 테스트 → 구현 (TDD)
- `npm run test` 통과 상태로 PR 생성

### 디스코드 보고
- PR 생성 시 **PC 뷰포트 스크린샷 1장** + PR URL
- UI 변경 없는 작업: 텍스트 요약만

---

## 파일 구조

```
fe-portfolio/
├── AGENTS.md
├── docs/
│   ├── index.md             # 문서 인덱스 (여기서 시작)
│   ├── planning.md
│   ├── conventions/
│   │   ├── coding.md
│   │   └── commit.md
│   └── specs/
│       └── spec-utils.md
└── src/
    ├── components/          # 섹션별 폴더 (Header/, Hero/, ...)
    ├── data/                # 더미/실제 데이터
    ├── utils/               # 순수 유틸 함수
    │   └── __tests__/
    └── types/
```
