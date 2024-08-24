"use client";

import React from "react";
import { use3dOgame } from "../hooks/use3dOgame";

export default function RessourcesScreen() {

  const activePlanet = use3dOgame((state) => {
    const planet = state.empire.planets.find(
      (p) => p.name === state.activePlanetName
    );    
    return planet;
  });

  return (
    <>
      <div className="p-5 mt-5 text-center bg-gradient-to-br from-blue-200/20 to-blue-500/20 rounded-xl">
        <span className="p-2 italic bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/70 text-3xl font-bold uppercase inline-block">
          Ressources
        </span>

        <div className="mt-3">
          <div className="mt-3 flex flex-wrap gap-3 items-end">
          <div className="flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="metalIcon.png" />
              <div>{activePlanet.resources.Metal}</div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="crystalIcon.png" />
              <div>{activePlanet.resources.Crystal}</div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="deutIcon.png" />
              <div>{activePlanet.resources.Deuterium}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
