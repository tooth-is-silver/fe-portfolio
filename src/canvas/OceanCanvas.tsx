import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OceanScene } from './OceanScene'
import styled from '@emotion/styled'

const CanvasWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
`

export function OceanCanvas() {
  return (
    <CanvasWrapper>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: false }}
      >
        <Suspense fallback={null}>
          <OceanScene />
        </Suspense>
      </Canvas>
    </CanvasWrapper>
  )
}
