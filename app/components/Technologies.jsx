"use client";

import React, {useState} from "react";
import MessageScreen from "./MessageScreen";
import { Html } from "@react-three/drei";
import ImageScreen from "./ImageScreen";
import { degToRad } from "three/src/math/MathUtils";
import TechnologiesScreen from "./TechnologiesScreen";

export default function Technologies() {

    const [technologies, setTechnologies] = useState({ visibility: true });

    const toggleVisibility = () => {
        setTechnologies({ visibility: !technologies.visibility });
      console.log(technologies);
    };
  return (
    <>
      {technologies.visibility && <Html
        position={[0, 0.13, -1.5]}
        transform
        distanceFactor={0.5}
        rotation={[0, 0, 0]}
      >
        <TechnologiesScreen/>
      </Html>}
      
        <ImageScreen
          url="technologies.png"
          position={[0, -0.27, -1.27]}
          rotation={[0, 0, 0]}
          scale={[0.5,0.275]}
          onClick={toggleVisibility}
        />
    </>
  );
}
