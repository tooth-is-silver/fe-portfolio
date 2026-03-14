import { describe, test, expect } from 'vitest'
import { truncateText } from '../string'

describe('truncateText', () => {
  test('길이 이하이면 그대로 반환', () => {
    expect(truncateText('Hello', 10)).toBe('Hello')
  })

  test('길이 초과 시 말줄임표 추가', () => {
    expect(truncateText('Hello World', 5)).toBe('Hello…')
  })

  test('빈 문자열', () => {
    expect(truncateText('', 10)).toBe('')
  })

  test('정확히 maxLength와 같은 길이 → 원본 반환', () => {
    expect(truncateText('Hello', 5)).toBe('Hello')
  })

  test('maxLength 0 → 말줄임표만', () => {
    expect(truncateText('Hello', 0)).toBe('…')
  })

  test('maxLength 음수 → 빈 문자열', () => {
    expect(truncateText('Hello', -1)).toBe('')
  })
})
