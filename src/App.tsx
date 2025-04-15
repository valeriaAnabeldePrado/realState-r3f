import './App.css'
import { Suspense, useState, useRef, useEffect } from "react";
import {
    Environment,
    Loader,
    OrbitControls,
} from "@react-three/drei";
import { Canvas, ThreeEvent, useThree } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { Model } from './model/Model';
import gsap from "gsap";

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

function CameraAnimator({ targetPosition, lookAtPosition, controls }: {
    targetPosition: THREE.Vector3 | null;
    lookAtPosition: THREE.Vector3 | null;
    controls: React.RefObject<typeof OrbitControls>;
}) {
    const { camera } = useThree();

    useEffect(() => {
        if (targetPosition && lookAtPosition && controls.current) {
            const duration = 3; // Duración de la animación en segundos
            const ease = "power3.out"; // Función de easing de GSAP

            gsap.to(camera.position, {
                x: targetPosition.x,
                y: 1.5,
                z: targetPosition.z,
                duration: duration,
                ease: ease,
            });

            gsap.to((controls.current as THREE.OrbitControls).target, {
                x: lookAtPosition.x,
                y: lookAtPosition.y,
                z: lookAtPosition.z,
                duration: duration + 0.2, // Ligeramente diferente para un efecto más natural
                ease: ease,
            });
        }
    }, [targetPosition, lookAtPosition, camera, controls]);

    return null;
}

function App() {
    const [targetPosition, setTargetPosition] = useState<THREE.Vector3 | null>(null);
    const [lookAtPosition, setLookAtPosition] = useState<THREE.Vector3 | null>(null);
    const controlsRef = useRef<THREE.OrbitControls | null>(null);

    const handleClick = (event: ThreeEvent<MouseEvent>) => {
        // 'event.point' contiene las coordenadas del punto de impacto en el objeto
        setTargetPosition(new THREE.Vector3(event.point.x, event.point.y, event.point.z));

        // Define el punto al que quieres que la cámara mire.
        // Podrías ajustar estos valores según tu escena.
        setLookAtPosition(new THREE.Vector3(0, 1.5, 0));
    };
console.log(targetPosition)
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
                        <CameraAnimator
                            targetPosition={targetPosition}
                            lookAtPosition={lookAtPosition}
                            controls={controlsRef}
                        />
                        <OrbitControls ref={(instance) => { controlsRef.current = instance as THREE.OrbitControls; }} />
                        <Environment preset="apartment" />
                    </Suspense>
                </Canvas>
                <Loader />
            </div>
        </>
    );
}

export default App