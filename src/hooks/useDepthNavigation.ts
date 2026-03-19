import { useEffect, useRef } from 'react'
import { useDepthStore } from '../store/depthStore'

const WHEEL_THRESHOLD = 50   // px — 이 이상 스크롤해야 이동
const TOUCH_THRESHOLD = 40   // px — 스와이프 민감도
const COOLDOWN_MS = 1200     // 연속 이동 방지 (애니메이션 시간과 맞춤)

/**
 * 마우스 휠 + 터치 스와이프로 depth 이동
 */
export function useDepthNavigation(enabled = true) {
  const { goDeeper, goShallower, isAnimating } = useDepthStore()
  const lastMoveTime = useRef(0)
  const touchStartY = useRef(0)

  useEffect(() => {
    if (!enabled) return

    const canMove = () => {
      const now = Date.now()
      if (isAnimating || now - lastMoveTime.current < COOLDOWN_MS) return false
      lastMoveTime.current = now
      return true
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (!canMove()) return

      if (e.deltaY > WHEEL_THRESHOLD) {
        // 아래로 스크롤 → 더 얕게 (수면 방향)
        goShallower()
      } else if (e.deltaY < -WHEEL_THRESHOLD) {
        // 위로 스크롤 → 더 깊게 (심해 방향)
        goDeeper()
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      if (Math.abs(deltaY) < TOUCH_THRESHOLD || !canMove()) return

      if (deltaY > 0) {
        goShallower() // 위로 스와이프 → 수면
      } else {
        goDeeper()    // 아래로 스와이프 → 심해
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [enabled, isAnimating, goDeeper, goShallower])
}
