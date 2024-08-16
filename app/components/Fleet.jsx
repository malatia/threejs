"use client";

import React, {useState} from "react";
import MessageScreen from "./MessageScreen";
import { Html } from "@react-three/drei";
import ImageScreen from "./ImageScreen";
import { degToRad } from "three/src/math/MathUtils";

export default function Fleet() {

    const [fleet, setFleet] = useState({ visibility: false });

    const toggleVisibility = () => {
        setFleet({ visibility: !fleet.visibility });
      console.log(fleet);
    };
  return (
    <>
      {fleet.visibility && <Html
        position={[0.5, 0, -2]}
        transform
        distanceFactor={0.35}
        rotation={[-0.8, -Math.PI / 4, -0.7]}
      >
        <MessageScreen />
      </Html>}
      
        <ImageScreen
          url="fleet.webp"
          position={[0.432, -0.34, -1]}
          rotation={[degToRad(-50), degToRad(-48),degToRad (-42)]}
          scale={[0.29,0.17]}
          onClick={toggleVisibility}
        />
    </>
  );
}
