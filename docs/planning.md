# Planning Document — Frontend Portfolio

> Updated: 2026-04-22 | Status: draft v2

---

## 1. Product Goal

이 프로젝트는 일반적인 소개형 포트폴리오가 아니라,
**스테이지형 미니게임을 클리어하며 이력서를 완성하는 게임형 포트폴리오**를 목표로 한다.

사용자는 순서대로 배치된 스테이지를 하나씩 클리어하면서
경력, 프로젝트, 학력, 대외활동, 강점 같은 이력서 조각을 해금한다.
모든 스테이지를 완료하면 최종적으로 **완성된 이력서 전체본**이 열린다.

핵심 목표는 아래 3가지다.

- 플레이 자체가 기억에 남는 포트폴리오 경험이 될 것
- 스테이지 진행만으로 지원자의 이력과 강점이 자연스럽게 이해될 것
- 마지막에는 채용 담당자가 바로 읽을 수 있는 정돈된 이력서가 제공될 것

---

## 2. Core Concept

### One-line Concept

> 스테이지를 클리어해 조각난 이력서를 완성하는 포트폴리오 게임

### Experience Promise

- 첫 화면에서 게임형 포트폴리오라는 콘셉트가 바로 이해된다.
- 각 스테이지는 짧고 명확하며, 클리어 보상이 분명하다.
- 진행할수록 이력서 완성도가 시각적으로 올라간다.
- 끝까지 클리어하면 일반 이력서처럼 읽을 수 있는 최종 결과물이 열린다.

### Target Audience

- 프론트엔드 채용 담당자
- 협업 개발자
- 포트폴리오의 구현력과 기획력을 함께 보고 싶은 실무자

---

## 3. Core Loop

1. 플레이어가 시작 화면에서 게임을 시작한다.
2. 월드맵 또는 스테이지 선택 화면에서 다음 스테이지를 선택한다.
3. 미니게임을 플레이한다.
4. 클리어하면 해당 이력서 조각이 해금된다.
5. 진행도 UI에서 이력서 완성률이 올라간다.
6. 모든 필수 스테이지를 끝내면 최종 Resume View가 열린다.

### Essential Rule

게임은 수단이고 포트폴리오가 본질이다.
따라서 각 스테이지는 재미보다도 **정보 전달의 선명함**을 해치지 않아야 한다.

---

## 4. Experience Structure

```text
[Start Screen]
  -> Start Game

[World Map / Stage Select]
  -> Stage 1
  -> Stage 2
  -> Stage 3
  -> Stage 4
  -> Stage 5
  -> Stage 6

[Stage Result]
  -> Resume Fragment Unlocked
  -> Progress Updated

[Final Resume View]
  -> Complete Resume
  -> Career Detail
  -> Project Highlights
  -> Contact
```

### Structure Principle

- 사용자는 지금 어디까지 왔는지 항상 알아야 한다.
- 다음에 무엇을 해야 하는지도 분명해야 한다.
- 이미 획득한 조각은 언제든 다시 열람할 수 있어야 한다.
- 최종 이력서는 게임을 끝낸 보상처럼 열리되, 읽기 쉬운 문서 구조여야 한다.

---

## 5. Recommended Stage Composition

사용자가 제안한 회사별 경력 스테이지 구성은 매우 자연스럽다.
특히 경력 자체가 강한 포트폴리오라면, 회사별 스테이지를 전면에 두는 편이 더 설득력 있다.

권장안은 **총 6개 스테이지**다.

### Stage Difficulty Rule

- Stage 1~3은 첫인상과 경력 전달이 목적이므로 가장 직관적인 조작을 쓴다.
- Stage 4~6은 정보 주제가 달라질 뿐, 난이도를 더 높이지 않는다.
- 후반부 스테이지는 난이도 상승이 아니라 **정보 조립의 밀도**가 올라가는 구조로 본다.

### Stage 1. Career — Toss

- 주제: 토스 경력
- 전달 정보:
  - 소속 / 포지션
  - 담당한 제품 또는 업무
  - 핵심 기여
  - 사용 기술
- 미니게임 후보:
  - 타일 점프
  - 타이밍 러닝
  - 체크포인트 수집
- 선정 근거:
  - 첫 스테이지는 조작 설명이 거의 없어도 되는 패턴이 유리하다.
  - 짧은 러닝/점프 흐름은 "첫 경력 조각을 획득한다"는 시작 감각을 명확하게 만든다.
  - 체크포인트 수집 구조는 소속, 역할, 기여, 기술을 한 조각씩 회수하는 연출과 잘 맞는다.
- MVP 우선안:
  - 타이밍 러닝

### Stage 2. Career — Lighthouse

- 주제: 라이트하우스 경력
- 전달 정보:
  - 맡은 역할
  - 협업 방식
  - 개선한 경험
  - 결과
- 미니게임 후보:
  - 장애물 회피
  - 스위치 순서 맞추기
  - 간단한 경로 퍼즐
- 선정 근거:
  - 라이트하우스 스테이지는 협업과 조율의 이미지를 전달해야 하므로, 순서와 판단이 드러나는 패턴이 적합하다.
  - 장애물 회피나 경로 퍼즐은 "막힌 흐름을 통과하며 개선한다"는 의미를 시각적으로 만들기 쉽다.
  - 스위치 순서 맞추기는 협업 순서, 작업 조합, 의사결정 과정을 은유하기 좋다.
- MVP 우선안:
  - 간단한 경로 퍼즐

### Stage 3. Career — Rowlabs

- 주제: 로랩스 경력
- 전달 정보:
  - 담당 도메인
  - 문제 해결 사례
  - 제품 기여
  - 기술적 포인트
- 미니게임 후보:
  - 움직이는 플랫폼
  - 키 조합 퍼즐
  - 순서 기억 퍼즐
- 선정 근거:
  - 로랩스 스테이지는 문제 해결과 기술적 포인트를 강조하므로, 반응보다 판단이 필요한 패턴이 맞다.
  - 움직이는 플랫폼은 변화하는 요구사항에 맞춰 이동하는 감각을 줄 수 있다.
  - 키 조합/순서 기억은 기능 연결, 흐름 이해, 조건 처리 같은 기술적 사고를 은유하기 좋다.
- MVP 우선안:
  - 순서 기억 퍼즐

### Stage 4. Education & Activities

- 주제: 학력 및 대외활동
- 전달 정보:
  - 학력
  - 교육 과정
  - 대외활동
  - 성장 과정
- 미니게임 후보:
  - 카드 뒤집기
  - 매칭 퍼즐
  - 문장 복구 퍼즐
- 선정 근거:
  - 학력과 대외활동은 사건의 연속보다 "이력의 연결"이 중요하므로 기억/매칭 계열이 적합하다.
  - 카드 뒤집기나 매칭 퍼즐은 흩어진 성장 이력을 다시 연결하는 감각을 만들 수 있다.
  - 문장 복구는 교육/활동 맥락을 지나치게 텍스트 중심으로 만들 수 있어 MVP에서는 후순위다.
- MVP 우선안:
  - 카드 뒤집기

### Stage 5. Career Detail

- 주제: 경력 상세 역량
- 전달 정보:
  - 문제 정의 방식
  - 개발 프로세스
  - 협업 스타일
  - 강점 키워드
- 미니게임 후보:
  - 미니 수도쿠
  - 논리 퍼즐
  - 규칙 찾기
- 선정 근거:
  - 이 스테이지는 회사 이력보다 "어떻게 일하는가"를 보여줘야 하므로 논리 기반 퍼즐이 가장 직접적이다.
  - 수도쿠, 규칙 찾기, 논리 퍼즐은 구조화된 사고와 문제 분해 이미지를 전달하기 좋다.
  - 단, 실제 난이도는 낮게 유지해 역량 서술이 퍼즐 난도에 묻히지 않게 해야 한다.
- MVP 우선안:
  - 규칙 찾기

### Stage 6. Projects / Final Unlock

- 주제: 대표 프로젝트 또는 최종 잠금 해제 스테이지
- 전달 정보:
  - 대표 프로젝트 하이라이트
  - GitHub / 링크
  - 최종 Resume Open 조건 충족
- 미니게임 후보:
  - 보스 스테이지 성격의 짧은 종합 퍼즐
  - 지금까지 얻은 조각을 조립하는 퍼즐
  - 리듬감 있는 피날레형 스테이지
- 선정 근거:
  - 마지막 스테이지는 새로운 정보를 배우는 구간보다, 기존 조각을 연결해 완성감을 주는 역할이 더 중요하다.
  - 따라서 완전히 새로운 규칙보다 지금까지 해금한 정보를 조립하는 패턴이 적합하다.
  - 최종 Resume Open은 보상이어야 하므로 플레이 시간은 짧고 성공 경험은 확실해야 한다.
- MVP 우선안:
  - 지금까지 얻은 조각을 조립하는 퍼즐

---

## 6. Grouping Strategy

반드시 회사 수만큼 전부 분리해야 하는 것은 아니다.
다만 현재 이야기한 구조에서는 **경력 3개는 개별 스테이지로 분리**하는 편이 좋다.

이유는 아래와 같다.

- 각 회사 경험이 곧 하나의 대표 서사로 보인다.
- 스테이지 클리어 보상이 명확해진다.
- "경력 하나를 깼다"는 진행감이 강하다.
- 마지막 이력서 조립 때 회사별 구분도 자연스럽다.

반대로 학력과 대외활동은 하나로 묶는 편이 더 효율적이다.

- 정보량이 경력보다 상대적으로 짧을 가능성이 크다.
- 별도 스테이지로 빼면 흐름이 늘어질 수 있다.
- 성장 과정 묶음으로 보여주는 편이 해석이 쉽다.

현재 기준 추천 묶음은 아래와 같다.

| Stage | Resume Fragment |
|---|---|
| 1 | 경력 - 토스 |
| 2 | 경력 - 라이트하우스 |
| 3 | 경력 - 로랩스 |
| 4 | 학력 + 대외활동 |
| 5 | 경력 상세 역량 / 일하는 방식 |
| 6 | 프로젝트 하이라이트 + 최종 해금 |

---

## 7. Progress System

이 기획의 핵심 중 하나는
**중간중간 이력서가 얼마나 완성되었는지 시각적으로 보여주는 것**이다.

### Required Progress UI

- 전체 진행률 퍼센트
- 해금된 조각 수 / 전체 조각 수
- 현재 완성된 이력서 미리보기
- 잠겨 있는 섹션의 실루엣 또는 빈 슬롯

### Recommended UI Pattern

#### Pattern A. Resume Blueprint

- 화면 한쪽에 이력서 와이어프레임이 항상 보인다.
- 아직 획득하지 않은 영역은 잠긴 상태로 보인다.
- 스테이지 클리어 때마다 해당 칸이 채워진다.

이 방식이 가장 추천된다.

이유:

- 사용자가 지금 무엇을 모으는지 한눈에 이해할 수 있다.
- "이력서를 완성한다"는 목표가 계속 유지된다.
- 마지막 보상 화면의 감정적 완성도가 높다.

#### Pattern B. Fragment Album

- 조각 카드가 슬롯에 쌓인다.
- 마지막에 한 번에 이력서로 변환된다.

이 방식은 연출은 좋지만,
중간 진행 상황이 덜 직관적일 수 있다.

따라서 MVP에서는 Pattern A가 더 적합하다.

---

## 8. Resume Fragment Structure

최종 이력서 해금 로직이 모호해지지 않도록,
각 스테이지는 1개 이상의 Resume Fragment 묶음을 반환한다.

### Fragment Principles

- Fragment는 화면 카드 단위와 데이터 단위를 동시에 겸한다.
- 하나의 Fragment는 하나의 메시지 묶음만 가져야 한다.
- 최종 Resume View는 Fragment를 재배열해 일반 이력서 구조로 보여준다.

### Recommended Fragment Model

```ts
interface ResumeFragment {
  id: string
  stageId: string
  section: 'career' | 'education' | 'activities' | 'strengths' | 'projects' | 'contact'
  title: string
  summary: string
  bullets: string[]
  tags?: string[]
  links?: {
    label: string
    url: string
  }[]
  unlocked: boolean
  order: number
}
```

### Stage to Fragment Mapping

| Stage | Primary Fragment Output |
|---|---|
| 1 | career / toss |
| 2 | career / lighthouse |
| 3 | career / rowlabs |
| 4 | education + activities |
| 5 | strengths |
| 6 | projects + final unlock token |

### Final Resume Assembly Rule

- Stage 1~5를 완료하면 핵심 Resume Blueprint는 거의 완성된다.
- Stage 6를 완료하면 프로젝트 하이라이트와 최종 해금 토큰이 추가된다.
- 최종 Resume View는 아래 순서로 조립한다.

1. Profile summary
2. Career fragments
3. Education / Activities fragments
4. Strengths fragment
5. Project fragments
6. Contact links

### Unlock Rule

- MVP 기준 최종 Resume View 오픈 조건은 **Stage 1~6 전체 클리어**다.
- 다만 플레이 중에도 현재까지 해금된 Fragment는 Blueprint에서 미리 볼 수 있다.
- `Skip to Resume Summary` 경로는 최종 전체본이 아니라, 현재까지 열린 정보만 보여주는 축약 뷰로 제한한다.

---

## 9. UX Principles

### Principle 1. Short Stages

- 각 스테이지는 30~90초 안에 끝난다.
- 조작 규칙은 5초 안에 이해 가능해야 한다.
- 너무 어려워서 이력서 확인이 막히면 안 된다.

### Principle 2. Reward Clarity

- 클리어 직후 무엇이 해금되었는지 바로 보여준다.
- 보상 정보는 길지 않고 스캔 가능해야 한다.
- 한 스테이지에서 너무 많은 텍스트를 한꺼번에 주지 않는다.

### Principle 3. Resume First

- 언제든 현재까지 해금된 이력서 상태를 열람 가능해야 한다.
- 게임을 모두 끝내지 않아도 핵심 정보를 어느 정도 볼 수 있어야 한다.
- 마지막 화면은 실제 제출용 이력서처럼 읽히는 구조여야 한다.

### Principle 4. Accessibility

- 키보드만으로도 플레이 가능한 방식을 우선 고려한다.
- `prefers-reduced-motion`를 지원한다.
- 명도 대비와 폰트 크기를 충분히 확보한다.
- 빠른 반응속도보다 이해 가능한 패턴을 우선한다.

---

## 10. Screen Flow

```text
Start Screen
  -> Stage Select / World Map
  -> Stage Intro
  -> Mini Game
  -> Clear Result
  -> Resume Progress Update
  -> Next Stage
  -> Final Resume Unlock
```

### Secondary Paths

- Start Screen -> Skip to Resume Summary
- Stage Select -> Current Resume Progress
- Final Resume -> Project Detail
- Final Resume -> Replay All

이 보조 경로는 채용 담당자가
게임형 경험과 정보 탐색 중 원하는 방식을 선택할 수 있게 한다.

---

## 11. Visual Direction

우주 허브는 버리되,
전체 분위기는 여전히 게임적이고 선명해야 한다.

### Recommended Tone

- 2D 또는 2.5D 사이드 스테이지 감성
- 월드맵 기반 진행 구조
- 밝고 명확한 게임 UI
- 중간중간 이력서 조각이 채워지는 대시보드

### References to Emulate

- 마리오식 스테이지 클리어 감각
- 월드맵에서 다음 스테이지가 열리는 구조
- 명확한 시작/클리어/보상 흐름

### Important Direction

마리오를 그대로 복제하는 것이 아니라,
**"스테이지 클리어형 진행감"만 차용**해야 한다.

즉, 필요한 것은 아래다.

- 순차 해금 구조
- 짧고 명확한 레벨
- 클리어 보상
- 전체 월드 진행감

필요 없는 것은 아래다.

- 복잡한 점프 액션 난이도
- 정밀한 물리 엔진
- 긴 액션 플레이

---

## 12. Technical Direction & Stack

현재 저장소의 기존 3D 우주 자산은 핵심에서 제외하고,
게임 구조를 새 흐름에 맞게 단순화하는 것이 맞다.

### Primary Stack

- React 19 + TypeScript + Vite
- Zustand
- GSAP

### Scope by Tool

- `React`: 화면 전환, 스테이지 UI, 결과 화면, Resume View
- `TypeScript`: Stage / Fragment / Progress 모델 정적 관리
- `Zustand`: 진행도, 해금 상태, 현재 스테이지, 현재 뷰 상태
- `GSAP`: 화면 전환, 클리어 연출, Resume Blueprint 채움 애니메이션

### Optional

- Three.js / React Three Fiber

3D가 반드시 필요한 상황이 아니라면,
MVP에서는 Canvas를 메인 축으로 두지 않는 편이 더 안전하다.
이번 기획은 3D 공간감보다 **명확한 스테이지 진행과 UI 완성도**가 더 중요하다.

### Recommended State Shape

```ts
interface StageProgress {
  currentStageId: string | null
  unlockedStageIds: string[]
  clearedStageIds: string[]
  unlockedResumeSections: string[]
  completionRate: number
  currentView: 'start' | 'map' | 'stage' | 'result' | 'resume'
}
```

### Rendering Principle

- 월드맵 / 진행도 / 이력서 보드는 DOM 중심
- 미니게임도 DOM 기반으로 구현
- 애니메이션은 GSAP로 보강
- 과한 엔진화보다 빠른 구현과 완성도를 우선

### Storage Rule

- MVP에서는 진행 상태를 세션 또는 로컬 상태로만 관리한다.
- 서버 저장이나 로그인 기반 복원은 범위 밖으로 둔다.
- 필요하면 `localStorage` 기반의 단순 이어하기만 후순위로 검토한다.

---

## 13. MVP Definition

MVP는 아래만 만족하면 된다.

- 시작 화면이 있다.
- 스테이지 선택 화면이 있다.
- **필수 스테이지 5개**가 있다.
- **최종 해금 스테이지 1개**가 있다.
- 최소 2종류 이상의 미니게임 패턴이 재사용된다.
- 각 스테이지 클리어 시 이력서 조각이 해금된다.
- 화면 한쪽 또는 전환 화면에서 이력서 완성률이 보인다.
- 마지막에 완성된 이력서 전체본이 열린다.

### Required Scope

- Stage 1. Toss
- Stage 2. Lighthouse
- Stage 3. Rowlabs
- Stage 4. Education & Activities
- Stage 5. Career Detail
- Stage 6. Projects / Final Unlock

### Optional Scope

- 미니게임별 세부 연출 강화
- 사운드
- 저장된 진행률 복구
- 2.5D 장식 요소
- 스테이지별 전용 배경 연출 확장

MVP에서 굳이 하지 않아도 되는 것:

- 실시간 물리 기반 점프 액션
- 복잡한 적 AI
- 어려운 퍼즐 난이도
- 사운드 연출
- 모바일에서 힘든 정밀 조작

---

## 14. Build Order

구현 순서는 아래가 가장 안전하다.

### Phase 1. Structure

- 시작 화면
- 스테이지 선택 화면
- 진행도 store
- Resume Blueprint UI

### Phase 2. One Playable Stage

- 스테이지 1개 구현
- 클리어 결과 화면
- 이력서 조각 해금 연결

### Phase 3. Full Stage Set

- 스테이지 5~6개 확장
- 미니게임 패턴 2종 이상 재사용
- 실제 콘텐츠 데이터 연결

### Phase 4. Final Resume

- 완성된 이력서 화면
- 경력 상세
- 프로젝트 하이라이트
- 연락 수단

### Phase 5. Polish

- 전환 애니메이션
- 모바일 대응
- 접근성 점검
- 텍스트 밀도 조정

---

## 15. Success Criteria

이 기획이 성공했다고 볼 수 있는 기준:

- 첫 화면만 보고도 게임형 이력서라는 콘셉트가 이해된다.
- 한 스테이지를 깨면 무엇을 얻었는지 명확하다.
- 진행할수록 이력서가 채워지는 감각이 유지된다.
- 모든 스테이지 완료 후 최종 이력서가 충분히 읽기 좋다.
- 사용자가 "재밌는 포트폴리오"와 "정리 잘 된 이력서"를 동시에 기억한다.
