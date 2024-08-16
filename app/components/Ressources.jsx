"use client";

import React, {useState} from "react";
import MessageScreen from "./MessageScreen";
import { Html } from "@react-three/drei";
import ImageScreen from "./ImageScreen";
import { degToRad } from "three/src/math/MathUtils";
import RessourcesScreen from "./RessourcesScreen";

export default function Ressources() {
  const [ressources, setRessources] = useState({ visibility: true });
  

  const toggleVisibility = () => {
    setRessources({ visibility: !ressources.visibility });
    console.log(ressources);
  };
  return (
    <>
      {ressources.visibility && <Html
        position={[-0.8, -0, -0.7]}
        transform
        distanceFactor={0.45}
        rotation={[-0.9, Math.PI / 4, 0.75]}        
      >
        <RessourcesScreen/>
      </Html>}
      
      <ImageScreen
          url="ressources.png"
          position={[-0.608, -0.345, -0.73]}
          rotation={[-degToRad(50), degToRad(48), degToRad(42)]}
          scale={[0.28,0.15]}
          onClick={toggleVisibility}
        />
    </>
  );
}
