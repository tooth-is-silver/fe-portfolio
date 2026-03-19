import { create } from 'zustand'
import gsap from 'gsap'

// depth: 0.0 = 수면 (밝음), 1.0 = 심해 (어두움)
// 섹션별 depth 앵커
export const SECTION_DEPTHS: Record<string, number> = {
  intro:      1.0,  // 심해 — 진입점
  work:       0.75, // 깊음 — 최신 경력
  projects:   0.5,  // 중간 — 프로젝트
  skills:     0.3,  // 얕음 — 스킬 + 스토리
  activities: 0.1,  // 거의 수면 — 대외활동
  contact:    0.0,  // 수면 — 연락처
}

const SECTION_ORDER = Object.keys(SECTION_DEPTHS)
const STEP = 1 / (SECTION_ORDER.length - 1) // 섹션 간 이동 간격
const ANIM_DURATION = 1.2 // seconds
const ANIM_EASE = 'power2.inOut'

interface DepthState {
  depth: number           // 현재 깊이 (0~1)
  targetDepth: number     // 목표 깊이
  activeSection: string   // 현재 활성 섹션
  isAnimating: boolean

  setDepth: (depth: number) => void
  goToSection: (section: string) => void
  goDeeper: () => void    // 더 깊이 (심해 방향)
  goShallower: () => void // 더 얕게 (수면 방향)
}

// GSAP tween 참조 (중복 실행 방지)
let currentTween: gsap.core.Tween | null = null

export const useDepthStore = create<DepthState>((set, get) => ({
  depth: SECTION_DEPTHS.intro,
  targetDepth: SECTION_DEPTHS.intro,
  activeSection: 'intro',
  isAnimating: false,

  setDepth: (depth: number) => {
    set({ depth: Math.max(0, Math.min(1, depth)) })
  },

  goToSection: (section: string) => {
    const target = SECTION_DEPTHS[section]
    if (target === undefined) return

    const proxy = { value: get().depth }
    currentTween?.kill()

    set({ targetDepth: target, activeSection: section, isAnimating: true })

    currentTween = gsap.to(proxy, {
      value: target,
      duration: ANIM_DURATION,
      ease: ANIM_EASE,
      onUpdate: () => set({ depth: proxy.value }),
      onComplete: () => set({ isAnimating: false }),
    })
  },

  goDeeper: () => {
    const currentIndex = Math.round(get().depth / STEP)
    const nextIndex = Math.min(currentIndex + 1, SECTION_ORDER.length - 1)
    get().goToSection(SECTION_ORDER[nextIndex])
  },

  goShallower: () => {
    const currentIndex = Math.round(get().depth / STEP)
    const prevIndex = Math.max(currentIndex - 1, 0)
    get().goToSection(SECTION_ORDER[prevIndex])
  },
}))
