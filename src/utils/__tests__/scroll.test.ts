import { describe, test, expect } from 'vitest'
import { getActiveSection } from '../scroll'

describe('getActiveSection', () => {
  const sections = [
    { id: 'hero',     top: 0,    height: 800 },
    { id: 'skills',   top: 800,  height: 600 },
    { id: 'projects', top: 1400, height: 700 },
    { id: 'contact',  top: 2100, height: 400 },
  ]

  test('빈 섹션 배열이면 null 반환', () => {
    expect(getActiveSection(0, [])).toBe(null)
  })

  test('scrollY 0 → 첫 번째 섹션', () => {
    expect(getActiveSection(0, sections)).toBe('hero')
  })

  test('scrollY가 두 번째 섹션 진입 후 → skills', () => {
    expect(getActiveSection(860, sections, 60)).toBe('skills')
  })

  test('scrollY가 음수 → null', () => {
    expect(getActiveSection(-10, sections)).toBe(null)
  })

  test('scrollY가 마지막 섹션 → contact', () => {
    expect(getActiveSection(2200, sections, 60)).toBe('contact')
  })

  test('섹션이 1개뿐 → 항상 그 섹션 id', () => {
    expect(getActiveSection(500, [{ id: 'hero', top: 0, height: 800 }])).toBe('hero')
  })
})
