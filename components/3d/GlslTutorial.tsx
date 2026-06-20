import { Canvas } from "@react-three/fiber"

import React from 'react'






function GlslTutorial() {
  return (
    <Canvas>
    <mesh>
        <shaderMaterial />
        <icosahedronGeometry args={[1,5]}/>
    </mesh>
    </Canvas>
  )
}

export default GlslTutorial