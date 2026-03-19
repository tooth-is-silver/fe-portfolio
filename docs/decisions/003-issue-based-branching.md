# 003 — 이슈 단위 브랜치 전략

**날짜**: 2026-03-15  
**상태**: 확정

## 고민

처음에는 `feature/v1-initial-layout` 같은 큰 단위 브랜치 하나에 여러 작업을 넣었다.  
근데 이러면 PR이 너무 커서 리뷰하기 어렵다는 피드백을 받았다.

## 결정

이슈 1개 = 브랜치 1개 = PR 1개  
브랜치 네이밍: `feat/issue-{번호}-{짧은-설명}`

## 이유

- PR이 작아야 리뷰가 가능하다
- 이슈 번호로 브랜치-PR-이슈가 연결되어 추적하기 쉬움
- 자동 삭제 설정 (`Automatically delete head branches`) + CI로 품질 관리

## 실제 예시

```
feat/issue-2-test-setup     → Vitest 세팅
feat/issue-3-util-getActiveSection → 유틸 함수 구현
feat/issue-6-nav-scroll-spy → Nav 스크롤 스파이
```

## 배운 점

작은 단위로 쪼갤수록 각 결정의 의도가 명확해진다.  
나중에 git log만 봐도 "왜 이게 들어갔는지" 알 수 있다.
