import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OceanScene } from './OceanScene'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const fullscreenStyle = css`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
`

const CanvasWrapper = styled.div`
  ${fullscreenStyle}
`

const LoadingScreen = styled.div`
  ${fullscreenStyle}
  background: hsl(220, 80%, 10%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(125, 211, 252, 0.6);
  font-family: sans-serif;
  font-size: 14px;
  letter-spacing: 0.1em;
`

// 모바일 디바이스 감지 (antialias 성능 최적화용)
const isMobile = /mobile|android|iphone|ipad/i.test(navigator.userAgent)

export function OceanCanvas() {
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
          <OceanScene />
        </Suspense>
      </Canvas>
      {/* Canvas 로딩 전 fallback — Suspense가 해소되면 사라짐 */}
    </CanvasWrapper>
  )
}

export { LoadingScreen }
