import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader =  `
varying vec2 vUv;

void main() {
  gl_FragColor = vec4(vUv, 0.0, 1.0);
}
`;


function WireframePlane() {
  const meshRef = useRef(null);

  const uniforms = useMemo(
    () => ({ progress: { value: 0 } }),
    []
  );

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = 0.2 * t;
    meshRef.current.rotation.y = 0.1 * t;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[1, 1, 128, 128]} />
      <meshBasicMaterial color="red" wireframe />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='h-screen w-screen bg-yellow-300 border relative'>
        <p className='absolute z-10'>dfvdbdgb</p>
        <Canvas
          camera={{ position: [0, 0, 2], fov: 75, near: 0.1, far: 100 }}
          style={{ width: '100%', height: '100%', }}
        >
          <ambientLight intensity={1} />
          <WireframePlane />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}