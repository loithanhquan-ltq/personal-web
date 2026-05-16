import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";

function RobotCore() {
  const groupRef = useRef(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.42;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.0006) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <octahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial color="#2e8dff" metalness={0.8} roughness={0.2} emissive="#1c6bff" emissiveIntensity={0.45} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.75, 0.07, 16, 120]} />
        <meshStandardMaterial color="#41d9ff" emissive="#41d9ff" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[0, 0, -1.6]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#2cf7c7" emissive="#2cf7c7" emissiveIntensity={0.42} />
      </mesh>
      <mesh position={[0, 0, 1.6]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#2cf7c7" emissive="#2cf7c7" emissiveIntensity={0.42} />
      </mesh>
    </group>
  );
}

function RoboticsScene() {
  return (
    <div className="h-[280px] w-full md:h-[340px]">
      <Canvas camera={{ position: [0, 0, 5] }} dpr={[1, 1.8]}>
        <ambientLight intensity={0.45} />
        <directionalLight position={[2, 2, 3]} intensity={1.2} color="#41d9ff" />
        <pointLight position={[-3, -1, 2]} intensity={1.1} color="#2cf7c7" />
        <Float speed={2.4} rotationIntensity={0.4} floatIntensity={0.9}>
          <RobotCore />
        </Float>
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
      </Canvas>
    </div>
  );
}

export default RoboticsScene;
