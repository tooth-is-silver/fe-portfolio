/**
 * 텍스트를 지정 길이로 자르고 말줄임표 추가 (프로젝트 설명 등)
 * @param text       원본 텍스트
 * @param maxLength  최대 길이
 */
export function truncateText(text: string, maxLength: number): string {
  if (maxLength < 0) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '…'
}
