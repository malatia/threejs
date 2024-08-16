"use client";

import React from "react";
import { Html } from "@react-three/drei";
import MessageScreen from "@/app/components/MessageScreen"

export default function MessageScreenGroup() {
  return (
    <>
      <Html
        position={[-1, -0.55, -1.2]}
        transform
        distanceFactor={0.45}
        rotation={[-0.9, Math.PI / 4, 0.75]}
      >
        <MessageScreen />
      </Html>
      <Html
        position={[-0.5, -0.4, -1.2]}
        transform
        distanceFactor={0.35}
        rotation={[-0.8, Math.PI / 4, 0.7]}
      >
        <MessageScreen />
      </Html>
      <Html
        position={[0, -0.27, -1.2]}
        transform
        distanceFactor={0.4}
        rotation={[0, 0, 0]}
      >
        <MessageScreen />
      </Html>
      <Html
        position={[0.5, -0.4, -1.2]}
        transform
        distanceFactor={0.35}
        rotation={[-0.8, -Math.PI / 4, -0.7]}
      >
        <MessageScreen />
      </Html>
      <Html
        position={[1, -0.55, -1.2]}
        transform
        distanceFactor={0.45}
        rotation={[-0.9, -Math.PI / 4, -0.75]}
      >
        <MessageScreen />
      </Html>
    </>
  );
}
