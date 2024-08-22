"use client";

import React, {useState} from "react";
import { Html } from "@react-three/drei";
import ImageScreen from "./ImageScreen";
import { degToRad } from "three/src/math/MathUtils";
import DefensesScreen from "./DefensesScreen"

export default function Defenses() {

    const [defenses, setDefenses] = useState({ visibility: true });

    const toggleVisibility = () => {
        setDefenses({ visibility: !defenses.visibility });
      console.log(defenses);
    };
  return (
    <>
      {defenses.visibility && <Html
        position={[-0.65, 0.02, -1.1]}
        transform
        distanceFactor={0.4}
        rotation={[-0.50, degToRad(25), 0.30]}
      >
        <DefensesScreen />
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
