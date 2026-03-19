import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OceanScene } from './OceanScene'
import { useDepthStore } from '../store/depthStore'
import { useDepthNavigation } from '../hooks/useDepthNavigation'
import styled from '@emotion/styled'

const CanvasWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
`

// 모바일 감지 — antialias 성능 최적화
const isMobile = /mobile|android|iphone|ipad/i.test(navigator.userAgent)

export function OceanCanvas() {
  const depth = useDepthStore((s) => s.depth)

  // 휠/스와이프 이동 활성화
  useDepthNavigation()

  return (
    <CanvasWrapper>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 1000 }}
        gl={{
          antialias: !isMobile,
          alpha: false,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>
          <OceanScene depth={depth} />
        </Suspense>
      </Canvas>
    </CanvasWrapper>
  )
}
