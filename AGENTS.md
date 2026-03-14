# fe-portfolio — Agent Configuration

프론트엔드 개발자 이가은의 포트폴리오 사이트.

---

## 작업 규칙

### 브랜치/PR 기반 워크플로
- **main**: 항상 동작하는 상태 유지
- 작업은 반드시 feature 브랜치에서 진행
- 브랜치 네이밍: `feature/섹션명`, `fix/이슈번호-설명`
- 작업 완료 후 PR 생성 → 확인 후 main 머지

### GitHub Issues 연동
- QA에서 발견된 버그 → GitHub Issue 등록
- 이슈 해결 시 커밋/PR 메시지에 `Closes #이슈번호` 포함
- 이슈 레이블: `bug`, `enhancement`, `question`

### 디스코드 보고 (푸시/PR 단위)
- PR 생성 또는 푸시 완료 시 **스크린샷 1장** + PR URL을 #코딩 채널에 전송
- UI 변경 없는 작업은 텍스트 요약만

---

## 기술 스택

- React 19 + TypeScript + Vite
- 순수 CSS (컴포넌트별 CSS 파일)
- 폰트: Pretendard Variable

---

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
