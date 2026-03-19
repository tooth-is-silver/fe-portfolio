# 006 — CSS-in-JS: Emotion 선택

**날짜**: 2026-03-19  
**상태**: 확정

## 고민

바다 콘셉트 3D 포트폴리오를 만들면서 UI 오버레이 스타일링을 어떻게 할지.

## 결정

**Emotion** (`@emotion/react`, `@emotion/styled`) 사용.

## 이유

- 순수 CSS로 시작했지만 R3F + 동적 스타일(depth에 따라 색상 변화 등)을 다루기엔 CSS-in-JS가 훨씬 자연스럽다
- depth 값을 props로 넘겨서 스타일을 동적으로 계산 가능
- 컴포넌트와 스타일이 같은 파일에 — 3D 씬 위의 오버레이 컴포넌트가 많아질 때 관리 편함
- Styled-components 대비 번들 크기 작음, Vite 궁합 좋음

## 적용 범위

- R3F Canvas 위의 **HTML UI 오버레이** 컴포넌트 (Nav, 콘텐츠 패널 등)
- 3D 씬 내부 (물고기, 파티클 등)는 Three.js material/shader로 처리 — Emotion 미적용

## 트레이드오프

- 기존에 만든 CSS 파일들 전부 Emotion으로 재작성 필요
- 이미 클린업 PR에서 기존 컴포넌트 삭제했으므로 마이그레이션 비용 없음
