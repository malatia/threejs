"use client";

import React, { useState } from "react";
import { Html, Billboard } from "@react-three/drei";
import ImageScreen from "./ImageScreen";
import PlanetMenu from "./PlanetMenu";

export default function Planets() {
  const planetsArray = [
    { Name: "Planet1" },
    { Name: "Planet2" },
    { Name: "Planet3" },
    { Name: "Planet4" },
    { Name: "Planet5" },
    { Name: "planet6" },
  ];
  const [planets, setPlanets] = useState({ visibility: false });

  const toggleVisibility = () => {
    setPlanets({ visibility: !planets.visibility });
    console.log(planets);
  };

  const handlePlanetClick = (planetName) => {
    console.log(`Clicked on planet: ${planetName}`);
    // Ajoutez ici toute autre logique que vous souhaitez exécuter lors du clic sur un bouton
  };

  return (
    <>
      {/* <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <Html position={[0.3, 0.3, -0.4]} distanceFactor={0.5} wrapperClass="w-full bg-blue-950">
          <img className="size-15" src="planets.png" style={{clipPath: 'polygon(33% 17%, 71% 18%, 100% 36%, 100% 61%, 69% 80%, 32% 80%, 0 62%, 0 34%);'}}/>
        </Html>
      </Billboard> */}

      <Billboard
        follow={true}
        lockX={false}
        lockY={false}
        lockZ={false} // Lock the rotation on the z axis (default=false)
      >
        <ImageScreen
          url="planets2.png"
          position={[0.27, -0.11, -0.2]}
          scale={[0.04, 0.04]}
          onClick={toggleVisibility}
        />

        <Html position={[0.255, 0.00, -0.2]}>
          {planets.visibility && (
            <PlanetMenu
              planets={planetsArray}
              onPlanetClick={handlePlanetClick}
            />
          )}
        </Html>
      </Billboard>
    </>
  );
}
