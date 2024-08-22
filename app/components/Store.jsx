"use client";

import React, { useState } from "react";
import MessageScreen from "./MessageScreen";
import { Html } from "@react-three/drei";
import ImageScreen from "./ImageScreen";
import { degToRad } from "three/src/math/MathUtils";
import StoreScreen from "./StoreScreen";

export default function Store() {
  const [store, setStore] = useState({ visibility: true });
  const [storePosition, setStorePosition] = useState([0.7, -0.015, -0.7]);

  const toggleVisibility = () => {
    setStore({ visibility: !store.visibility });
    // setStorePosition([0,0,0])
    console.log(store);
  };
  return (
    <>
      {store.visibility && (
        <Html
          position={storePosition}
          transform
          distanceFactor={0.35}
          rotation={[-0.7, -Math.PI / 4, -0.55]}
        >
          <StoreScreen />
        </Html>
      )}

      <ImageScreen
        url="planets.png"
        position={[0.608, -0.34, -0.73]}
        rotation={[degToRad(-50), degToRad(-48), degToRad(-41)]}
        scale={[0.29, 0.17]}
        onClick={toggleVisibility}
      />
    </>
  );
}
