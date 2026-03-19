# 007 — 배포: Vercel 선택 (GitHub Pages 아닌 이유)

**날짜**: 2026-03-19  
**상태**: 확정

## 고민

GitHub 레포를 쓰고 있으니 GitHub Pages로 배포하는 게 더 자연스럽지 않을까?  
Vercel을 따로 쓰는 이유가 있나?

## 결정

**Vercel** 유지.

## 이유

결정적인 이유는 딱 하나 — **PR 프리뷰 URL**.

Vercel은 PR을 만들 때마다 해당 브랜치의 배포 URL을 자동으로 생성해준다.  
UI/UX를 리뷰할 때 코드만 보는 게 아니라 **실제 렌더링된 화면으로 확인**할 수 있다.

GitHub Pages는 main 브랜치만 배포되기 때문에 PR 단계에서 UI 확인이 안 된다.

## 비교

| 항목 | Vercel | GitHub Pages |
|---|---|---|
| PR 프리뷰 URL | ✅ 자동 생성 | ❌ 없음 |
| 배포 속도 | 빠름 (글로벌 CDN) | 보통 |
| 설정 복잡도 | 쉬움 | Actions 설정 필요 |
| 도메인 | `xxx.vercel.app` | `username.github.io/repo` |
| 비용 | 무료 (hobby) | 무료 |

## 배운 점

도구 선택의 기준이 "익숙함"이 아니라 **워크플로에 어떤 가치를 주는가**여야 한다.  
PR 리뷰 단계에서 UI를 실제로 볼 수 있는 것 — 이게 Vercel을 쓰는 이유다.
