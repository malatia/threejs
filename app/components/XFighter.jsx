"use client";

import { OrbitControls, Gltf, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";

export const XFighter = () => {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <Environment preset="sunset" />
        <ambientLight intensity={0.9} color="pink" />
        <Gltf src="/models/XFighter.glb" />
      </Canvas>
    </>
  );
};
