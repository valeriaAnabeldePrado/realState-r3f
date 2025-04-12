import './App.css'
import { Suspense, useState } from "react";
import {
  Environment,
  Loader,
  OrbitControls,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { Model } from './model/Model';

const Lights = React.memo(function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <directionalLight
        position={[2, 2, 2]}
        intensity={0.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
    </>
  );
});

// Componente que maneja el movimiento de cámara animado
function CameraAnimator({ targetPosition }: { targetPosition: THREE.Vector3 | null }) {
  const { camera } = useThree()

  useFrame(() => {
    if (targetPosition) {
      const current = new THREE.Vector3().copy(camera.position)
      const target = new THREE.Vector3(targetPosition.x, 1.5, targetPosition.z) // mantener y = 1.5
      current.lerp(target, 0.05) // suaviza el movimiento

      camera.position.copy(current)
      camera.lookAt(target) 
      
    }
  })

  return null
}

function App() {
  const [target, setTarget] = useState<THREE.Vector3 | null>(null)

  // Click sobre el cubo
  const handleClick = () => {
    setTarget(new THREE.Vector3(0, 1.5, 0)) // coordenadas del cubo verde
  }

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <Canvas
          shadows
          style={{ background: '#e0e0e0' }}
          camera={{
            position: [0, 1.5, 8],
            near: 0.1,
            far: 200,
          }}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
            alpha: false,
            stencil: false,
            depth: true,
          }}
        >
          <Suspense fallback={null}>
            <Model position={0.1} />
            <Lights />

            {/* Piso */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
              <planeGeometry args={[100, 100]} />
              <meshStandardMaterial color="#999999" />
            </mesh>

            {/* Cubo de destino */}
            <mesh position={[0, 1, 0]} scale={0.2} castShadow onClick={handleClick}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#00ff00" />
            </mesh>

            {/* Movimiento de cámara animado */}
            <CameraAnimator targetPosition={target} />
            <OrbitControls   

 />
            <Environment preset="apartment" />
          </Suspense>
        </Canvas>
        <Loader />
      </div>
    </>
  )
}

export default App
