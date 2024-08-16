"use client";

import { CameraControls, Gltf, Environment, Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import MessageScreenGroup from "./MessageScreenGroup";

import ImageScreen from "./ImageScreen";
import Planets from "./Planets";
import Ressources from "./Ressources";
import Defenses from "./Defenses";
import Fleet from "./Fleet";
import Technologies from "./Technologies";
import Store from "./Store";

export const Cockpit = () => {
  const [cockPit, setCockpit] = useState({ planetsVisibility: false });
  const togglePlanetsVisibility = () => {
    setCockpit({ planetsVisibility: !cockPit.planetsVisibility });
    console.log(cockPit);
  };

  return (
    <>
      <Canvas camera={{ position: [0, 0, 0.00001], rotation: [30, 0, 0] }}>
        <CameraManager />
        <Environment preset="sunset" />
        <ambientLight intensity={0.9} color="pink" />
        <Float speed={0.5} floatIntensity={0.2} rotationIntensity={0.1}>
          <Planets />
          <Store/>
          <Ressources />
          <Fleet />
          <Technologies />
          <Defenses />
          {/* <ImageScreen
            url="test_image.png"
            position={[-2, 0, -2]}
            rotation={[0, Math.PI / 4, 0]}
            onClick={togglePlanetsVisibility}
          /> */}

          <Gltf
            src="/models/cockpit2.glb"
            position={[0, -3.2, 0.4]}
            rotation={[0, Math.PI, 0]}
          />
        </Float>
      </Canvas>
    </>
  );
};

const CameraManager = () => {
  return (
    <CameraControls
      polarRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
      azimuthRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
    />
  );
};
