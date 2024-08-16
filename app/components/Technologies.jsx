"use client";

import React, {useState} from "react";
import MessageScreen from "./MessageScreen";
import { Html } from "@react-three/drei";
import ImageScreen from "./ImageScreen";
import { degToRad } from "three/src/math/MathUtils";

export default function Technologies() {

    const [technologies, setTechnologies] = useState({ visibility: false });

    const toggleVisibility = () => {
        setTechnologies({ visibility: !technologies.visibility });
      console.log(technologies);
    };
  return (
    <>
      {technologies.visibility && <Html
        position={[0, 0, -2]}
        transform
        distanceFactor={0.4}
        rotation={[0, 0, 0]}
      >
        <MessageScreen />
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
