import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';


const vertexShader = `
  uniform float progress;
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader =  `
  uniform float progress;
  varying vec2 vUv;

  void main() {
    gl_FragColor = vec4(vUv, progress, 1.0);
  }
`;


function WireframePlane() {
  const meshRef = useRef<THREE.Mesh>(null);

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
      <shaderMaterial
        side={THREE.DoubleSide}
        wireframe
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2], fov: 75, near: 0.1, far: 100 }}
      gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ambientLight color={new THREE.Color(1, 1, 1)} />
      <WireframePlane />
      <OrbitControls />
    </Canvas>
  );
}