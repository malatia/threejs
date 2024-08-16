"use client";

import React, {useState} from "react";
import MessageScreen from "./MessageScreen";
import { Html } from "@react-three/drei";
import ImageScreen from "./ImageScreen";
import { degToRad } from "three/src/math/MathUtils";


export default function Store() {

  const [planets, setPlanets] = useState({ visibility: true });

  const toggleVisibility = () => {
      setPlanets({ visibility: !planets.visibility });
      console.log(planets);
    };
  return (
    <>
      {planets.visibility &&  <Html
        position={[1, 0.55, -1.2]}
        transform
        distanceFactor={0.45}
        rotation={[-0.9, -Math.PI / 4, -0.75]}
      >
        <MessageScreen />        
      </Html>}

      <ImageScreen
          url="planets.png"
          position={[0.608, -0.34, -0.73]}
          rotation={[degToRad(-50), degToRad(-48),degToRad (-41)]}
          scale={[0.29,0.17]}
          onClick={toggleVisibility}
        />
    </>
  );
}
