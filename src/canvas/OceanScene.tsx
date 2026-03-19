import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

// 심해 기본 씬 — 깊이 시스템 추가 전 스모크 테스트용
// depth 0.0 = 수면 (밝음), 1.0 = 심해 (어두움)
const INITIAL_DEPTH = 0.8

export function OceanScene() {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  // 깊이에 따른 배경색 (임시 — Phase 2에서 fog + gradient로 교체 예정)
  const bgLightness = 10 + (1 - INITIAL_DEPTH) * 40 // 10% (심해) ~ 50% (수면)

  return (
    <>
      {/* 배경색 */}
      <color attach="background" args={[`hsl(220, 80%, ${bgLightness}%)`]} />

      {/* 기본 조명 */}
      <ambientLight intensity={0.3 + (1 - INITIAL_DEPTH) * 0.5} />
      <directionalLight
        position={[0, 10, 5]}
        intensity={0.5 + (1 - INITIAL_DEPTH) * 1.5}
        color="#7dd3fc"
      />

      {/* 임시 mesh — 씬 동작 확인용 */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </>
  )
}
