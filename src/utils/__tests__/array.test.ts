import { describe, test, expect } from 'vitest'
import { groupBy } from '../array'

describe('groupBy', () => {
  test('카테고리별 그룹핑', () => {
    const items = [
      { name: 'React', category: 'Frontend' },
      { name: 'Git',   category: 'Tools' },
      { name: 'Vite',  category: 'Frontend' },
    ]
    const result = groupBy(items, (i) => i.category)
    expect(result['Frontend']).toHaveLength(2)
    expect(result['Tools']).toHaveLength(1)
  })

  test('빈 배열 → 빈 객체', () => {
    expect(groupBy([], (i) => String(i))).toEqual({})
  })

  test('모든 항목이 같은 키 → 키 1개짜리 객체', () => {
    const items = [{ v: 1 }, { v: 2 }, { v: 3 }]
    const result = groupBy(items, () => 'same')
    expect(Object.keys(result)).toHaveLength(1)
    expect(result['same']).toHaveLength(3)
  })

  test('keyFn이 빈 문자열 반환 → "" 키로 그룹핑', () => {
    const items = [{ v: 1 }, { v: 2 }]
    const result = groupBy(items, () => '')
    expect(result['']).toHaveLength(2)
  })
})
