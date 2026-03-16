import { useState, useEffect } from 'react'
import { getActiveSection } from '../utils/scroll'

const SECTION_IDS = ['hero', 'skills', 'projects', 'contact']
const HEADER_OFFSET = 80

/**
 * 현재 스크롤 위치 기준으로 활성 섹션 ID를 반환하는 훅
 */
export function useScrollSpy(): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const getSections = () =>
      SECTION_IDS.map((id) => {
        const el = document.getElementById(id)
        return el
          ? { id, top: el.offsetTop, height: el.offsetHeight }
          : null
      }).filter(Boolean) as { id: string; top: number; height: number }[]

    const handleScroll = () => {
      const sections = getSections()
      setActiveId(getActiveSection(window.scrollY, sections, HEADER_OFFSET))
    }

    // 초기값 설정
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return activeId
}
