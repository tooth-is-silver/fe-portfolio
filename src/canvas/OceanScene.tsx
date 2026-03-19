import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Mesh } from 'three'

// 심해 기본 씬
// depth 0.0 = 수면 (밝음), 1.0 = 심해 (어두움)

interface OceanSceneProps {
  depth?: number
}

export function OceanScene({ depth = 0.8 }: OceanSceneProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  // 깊이에 따른 배경 밝기 (Phase 2에서 fog + gradient로 교체 예정)
  const bgLightness = 10 + (1 - depth) * 40 // 10% (심해) ~ 50% (수면)
  const ambientIntensity = 0.3 + (1 - depth) * 0.5
  const dirLightIntensity = 0.5 + (1 - depth) * 1.5

  return (
    <>
      {/* 배경색 */}
      <color attach="background" args={[`hsl(220, 80%, ${bgLightness}%)`]} />

      {/* 조명 */}
      <ambientLight intensity={ambientIntensity} />
      <directionalLight
        position={[0, 10, 5]}
        intensity={dirLightIntensity}
        color="#7dd3fc"
      />

      {/* 임시 mesh — 씬 동작 확인용 (Phase 3에서 콘텐츠 패널로 교체 예정) */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.6}
          emissive="#38bdf8"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* 후처리 효과 */}
      <EffectComposer>
        {/* 심해일수록 bloom 약하게, 수면에 가까울수록 밝게 */}
        <Bloom
          luminanceThreshold={0.6}
          luminanceSmoothing={0.9}
          intensity={0.3 + (1 - depth) * 0.7}
        />
      </EffectComposer>
    </>
  )
}
