# fe-portfolio — Agent Configuration

프론트엔드 개발자 이가은의 포트폴리오 사이트.

---

## 작업 규칙

### 브랜치/PR 기반 워크플로
- **main**: 항상 동작하는 상태 유지
- 작업은 반드시 feature 브랜치에서 진행
- 브랜치 네이밍: `feature/섹션명`, `fix/이슈번호-설명`
- **PR 단위 = 태스크(관심사) 단위** — 같은 관심사면 여러 푸시도 하나의 PR
- **푸시 횟수 ≠ PR 수** — 태스크 완료 시점에 PR 생성, 중간 푸시는 같은 브랜치에 쌓기
- 예시: Header 브랜치에 여러 번 커밋/푸시해도 PR은 Header 완료 시 1개만 생성
- 작업 완료 후 PR 생성 → 확인 후 main 머지

### GitHub Issues 연동
- QA에서 발견된 버그 → GitHub Issue 등록
- 이슈 해결 시 커밋/PR 메시지에 `Closes #이슈번호` 포함
- 이슈 레이블: `bug`, `enhancement`, `question`

### 디스코드 보고 (푸시/PR 단위)
- PR 생성 또는 푸시 완료 시 **스크린샷 1장** + PR URL을 #코딩 채널에 전송
- 스크린샷은 **PC 뷰포트 (1280px 이상)** 기준으로 찍기 (반응형 구현은 모바일 퍼스트, 확인은 PC)
- UI 변경 없는 작업은 텍스트 요약만

---

## 기술 스택

- React 19 + TypeScript + Vite
- 순수 CSS (컴포넌트별 CSS 파일)
- 폰트: Pretendard Variable

---

## 유틸리티 & 테스트 규칙

### 순수 함수 분리 원칙
- 컴포넌트에서 **상태/DOM에 의존하지 않는 로직**은 `src/utils/` 폴더로 분리
- 분리된 유틸 함수는 반드시 **테스트 코드 작성** (Vitest 기반)
- 테스트 파일: `src/utils/__tests__/함수명.test.ts`

### 스펙 문서
- 유틸 함수 추가 시 `docs/spec-utils.md`에 스펙 먼저 작성
- 스펙 항목: 함수명 / 목적 / 파라미터 / 반환값 / 엣지케이스 / 테스트 케이스
- **스펙 → 테스트 작성 → 구현** 순서 권장 (TDD)

### 테스트 통과 기준
- `npm run test` 전체 통과 상태로 PR 생성
- 테스트 실패 시 PR 머지 금지

## 파일 구조 (목표)

```
fe-portfolio/
├── AGENTS.md
├── docs/
│   └── planning.md          # 기획/와이어프레임
├── public/
└── src/
    ├── App.tsx
    ├── App.css
    ├── main.tsx
    ├── components/
    │   ├── Header/
    │   ├── Hero/
    │   ├── About/
    │   ├── Skills/
    │   ├── Projects/
    │   └── Contact/
    ├── data/                # 더미/실제 데이터
    ├── utils/               # 순수 유틸 함수
    │   └── __tests__/       # Vitest 테스트 파일
    └── types/               # TypeScript 타입
```

---

## 섹션별 구현 순서 (v1)

1. **Header/Nav** — sticky, 모바일 햄버거
2. **Hero** — 이름, 직함, CTA 버튼
3. **Skills** — 태그 그리드
4. **Projects** — 카드 3개 (더미 데이터)
5. **Contact** — 링크 목록
6. **Footer**

---

## 코딩 컨벤션

- 컴포넌트: PascalCase, 폴더별 분리
- CSS: 컴포넌트명.css 파일 분리
- 더미 데이터: `src/data/` 폴더에 TypeScript 파일로 관리
- 커밋: `feat:`, `fix:`, `style:`, `docs:`, `refactor:` 프리픽스

### 반응형 CSS 규칙 (필수)

**모바일 퍼스트** — 기본 스타일은 모바일 기준으로 작성하고, 미디어 쿼리로 확장

```css
/* ✅ 올바른 방식: 모바일 기본, 위로 확장 */
.container {
  padding: 16px;          /* 모바일 기본 */
}

@media (min-width: 768px) {
  .container {
    padding: 24px;        /* 태블릿 */
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 40px;        /* 데스크톱 */
  }
}

/* ❌ 금지: 데스크톱 기준으로 쓰고 max-width로 줄이는 방식 */
```

**브레이크포인트:**
- 모바일: 기본 (0px~)
- 태블릿: `min-width: 768px`
- 데스크톱: `min-width: 1200px`

**공통 원칙:**
- `width: 100%` 기본, 데스크톱에서 `max-width` 제한
- 그리드: 모바일 1열 → 태블릿 2열 → 데스크톱 3열
- 폰트 사이즈: 모바일 기준 작성, 데스크톱에서 확대
- 터치 타겟 최소 44px (버튼, 링크)
