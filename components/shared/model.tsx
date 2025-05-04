"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

function ImportedCube({ color }: { color: string }) {
  const { scene } = useGLTF("/model/simple_cube.glb");
  const ref = useRef<THREE.Object3D>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.traverse((child: any) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.color.set(color);
      }
    });
  }, [color]);

  return <primitive object={scene} ref={ref} />;
}

export default function CubeViewer() {
  const [color, setColor] = useState("#ff0000");

  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [2, 2, 2], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <ImportedCube color={color} />
        <OrbitControls />
      </Canvas>

      <div className="absolute top-4 left-4 bg-white p-2 rounded shadow">
        <label className="block font-bold mb-1">Choose Color:</label>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    </div>
  );
}
