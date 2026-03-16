/**
 * 배열을 키 기준으로 그룹핑 (스킬 카테고리 그룹핑 등)
 * @param items  그룹핑할 배열
 * @param keyFn  각 아이템의 그룹 키를 반환하는 함수
 */
export function groupBy<T>(
  items: T[],
  keyFn: (item: T) => string,
): Record<string, T[]> {
  return items.reduce<Record<string, T[]>>((acc, item) => {
    const key = keyFn(item)
    if (!acc[key]) acc[key] = []
    acc[key].push(item)
    return acc
  }, {})
}
