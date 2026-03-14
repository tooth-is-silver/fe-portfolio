# 문서 인덱스 — fe-portfolio

> AI 에이전트는 작업 시작 전 이 파일을 먼저 읽고, 해당 작업에 필요한 문서만 선택적으로 읽는다.

---

## 문서 읽기 가이드

| 작업 종류 | 읽어야 할 문서 |
|----------|--------------|
| **새 컴포넌트 개발** | `docs/conventions/coding.md` |
| **CSS/스타일 작업** | `docs/conventions/coding.md` (반응형 섹션만) |
| **유틸 함수 구현** | `docs/specs/spec-utils.md` (해당 함수 섹션만) |
| **커밋/PR 작성** | `docs/conventions/commit.md` |
| **기획 확인** | `docs/planning.md` |
| **PR 리뷰/리팩토링** | `AGENTS.md` (PR 리뷰 체크리스트 섹션) |
| **테스트 작성** | `docs/specs/spec-utils.md` + `docs/conventions/coding.md` |
| **이슈 처리** | 해당 이슈 내용 + 관련 파일만 |

---

## 전체 문서 목록

| 파일 | 목적 | 크기 | 업데이트 빈도 |
|------|------|------|-------------|
| `AGENTS.md` | 워크플로 규칙, PR/이슈/리뷰 절차 | 중간 | 규칙 변경 시 |
| `docs/index.md` | 이 파일 — 문서 인덱스 | 작음 | 문서 추가 시 |
| `docs/planning.md` | 와이어프레임, 섹션 구조, 디자인 방향 | 중간 | 기획 변경 시 |
| `docs/conventions/coding.md` | 코딩 컨벤션, 반응형 규칙 | 중간 | 거의 안 바뀜 |
| `docs/conventions/commit.md` | 커밋 메시지 컨벤션 | 작음 | 거의 안 바뀜 |
| `docs/specs/spec-utils.md` | 유틸 함수 스펙, 테스트 케이스 | 중간 | 유틸 추가 시 |

---

## 읽지 않아도 되는 상황

- 단순 버그 수정 → 해당 파일만 읽기
- 텍스트/더미 데이터 수정 → `src/data/` 파일만
- 이미 파악한 컨텍스트가 있으면 재독 불필요
