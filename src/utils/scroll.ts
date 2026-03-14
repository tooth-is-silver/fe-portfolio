export interface SectionRect {
  id: string
  top: number
  height: number
}

/**
 * 현재 스크롤 위치 기준으로 활성화된 섹션 ID 반환 (Nav 하이라이트용)
 * @param scrollY   현재 window.scrollY
 * @param sections  섹션 목록 (top, height 기준)
 * @param offset    헤더 높이 등 보정값 (기본 60)
 */
export function getActiveSection(
  scrollY: number,
  sections: SectionRect[],
  offset = 60,
): string | null {
  if (sections.length === 0 || scrollY < 0) return null

  const adjustedY = scrollY + offset

  let active: string | null = null
  for (const section of sections) {
    if (adjustedY >= section.top) {
      active = section.id
    }
  }
  return active
}
