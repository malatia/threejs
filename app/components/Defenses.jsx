"use client";

import React, {useState} from "react";
import MessageScreen from "./MessageScreen";
import { Html } from "@react-three/drei";
import ImageScreen from "./ImageScreen";
import { degToRad } from "three/src/math/MathUtils";

export default function Defenses() {

    const [defenses, setDefenses] = useState({ visibility: false });

    const toggleVisibility = () => {
        setDefenses({ visibility: !defenses.visibility });
      console.log(defenses);
    };
  return (
    <>
      {defenses.visibility && <Html
        position={[-0.5, 0.5, -1.2]}
        transform
        distanceFactor={0.35}
        rotation={[-0.8, Math.PI / 4, 0.7]}
      >
        <MessageScreen />
      </Html>}

        <ImageScreen
          url="defenses.png"
          position={[-0.44, -0.345, -1.005]}
          rotation={[-degToRad(48), degToRad(52), degToRad(40)]}
          scale={[0.3,0.16]}
          onClick={toggleVisibility}
        />
    </>
  );
}
