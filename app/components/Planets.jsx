"use client";

import React, { useState } from "react";
import MessageScreen from "./MessageScreen";
import { Html, Billboard } from "@react-three/drei";
import ImageScreen from "./ImageScreen";
import { degToRad } from "three/src/math/MathUtils";

export default function Planets() {
  return (
    <>
      {/* <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Html position={[0.5, 0.3, -0.4]} distanceFactor={0.5} wrapperClass="w-full bg-blue-950">
          <img className="size-15" src="planets.png" />
        </Html>
      </Billboard> */}

       {/* <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Html position={[0.55, 0.3, -0.4]} distanceFactor={0.5}>
          <img src="planets.png" />
        </Html>
      </Billboard> */}

      <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <ImageScreen
          url="planets.png"
          position={[0.5, 0.25, -0.4]}
          scale={[0.15, 0.17]}          
        />
      </Billboard>
    </>
  );
}
