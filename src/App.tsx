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
    controls: React.RefObject<OrbitControls>;
}) {
    const { camera } = useThree();

    useEffect(() => {
        if (targetPosition && lookAtPosition && controls.current) {
            const duration = 3;
            const ease = "power3.out";

            // Mover la cámara exactamente a la posición del cubo
            gsap.to(camera.position, {
                x: targetPosition.x,
                y: 1.5,
                z: targetPosition.z,
                duration,
                ease,
            });

            // Mover el punto de orbita adelante del cubo
            gsap.to(controls.current.target, { 
                x: lookAtPosition.x,
                y: lookAtPosition.y,
                z: lookAtPosition.z,
                duration: duration + 0.2,
                ease,
                onUpdate: () => {
                    if (controls.current) {
                        controls.current.update();
                    }
                }
            });
        }
    }, [targetPosition, lookAtPosition, camera, controls]);

    return null;
}
function App() {
    const [targetPosition, setTargetPosition] = useState<THREE.Vector3 | null>(null);
    const [lookAtPosition, setLookAtPosition] = useState<THREE.Vector3 | null>(null);
    const [openModal, setOpenModal] = useState<string | null>(null)
    
    const controlsRef = useRef<THREE.OrbitControls | null>(null);
  


const handleClick = (event: ThreeEvent<MouseEvent>) => {
    if (!controlsRef.current) return;
    
    const camera = controlsRef.current.object;
    
    // Guardar la dirección actual de la cámara
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    
    // Posición exacta del cubo (donde queremos que esté la cámara)
    const cubePosition = new THREE.Vector3(event.point.x, 1.5, event.point.z);
    
    // Calcular el nuevo punto objetivo adelante del cubo en la dirección actual
    // Usamos la misma dirección que ya tenía la cámara
    const newTarget = new THREE.Vector3()
        .copy(cubePosition)
        .add(direction.multiplyScalar(0.2)); // El factor 2 determina qué tan lejos "mira" la cámara
    
    setTargetPosition(cubePosition);
    setLookAtPosition(newTarget);
};
    
    

  

    const handlePartName =(partname: string) => {
        setOpenModal(partname)
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
                        <Model position={0.1} onPartHover={handlePartName}/>
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
                        <mesh position={[0.5, 1, 4]} scale={0.2} castShadow onClick={handleClick}>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color="#00ff00" />
                        </mesh>
                        <mesh position={[-1, 1, 4]} scale={0.2} castShadow onClick={handleClick}>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color="#00ff00" />
                        </mesh>

                        {/* Movimiento de cámara animado */}
                        <CameraAnimator
                            targetPosition={targetPosition}
                            lookAtPosition={lookAtPosition}
                            controls={controlsRef}
                        />
                       <OrbitControls ref={controlsRef} makeDefault />
                        <Environment preset="apartment" />
                    </Suspense>
                </Canvas>
                <Loader />
                {openModal === "stellaj"&&(
                    <div className="modal">
                        <h2>Stellaj</h2>
                        <p>Descripción de Stellaj</p>
                       
                    </div>
                )}
            </div>
        </>
    );
}

export default App