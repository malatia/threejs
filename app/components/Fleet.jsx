"use client";

import React, {useState} from "react";
import { Html } from "@react-three/drei";
import ImageScreen from "./ImageScreen";
import { degToRad } from "three/src/math/MathUtils";
import FleetScreen from "./FleetScreen";


export default function Fleet() {

    const [fleet, setFleet] = useState({ visibility: true });

    const toggleVisibility = () => {
        setFleet({ visibility: !fleet.visibility });
      console.log(fleet);
    };
  return (
    <>
      {fleet.visibility && <Html
        position={[0.50, 0, -1.1]}
        transform
        distanceFactor={0.4}
        rotation={[-0.60, degToRad(-25), -0.40]}        
      >
        <FleetScreen />
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
