"use client";

import React from "react";
import { use3dOgame } from "../hooks/use3dOgame";

export default function TechnologiesScreen() {

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
          Technologies
        </span>

        <div className="mt-3">
          <div className="max-w-96 mt-3 flex flex-wrap gap-3 items-end">
            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="CombustIcon.png" />
              <div>{activePlanet.technologies.Combustion}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="EnergyIcon.png" />
              <div>{activePlanet.technologies.Energy}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="ImpulsIcon.png" />
              <div>{activePlanet.technologies.Impulsion}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="LaserIcon.png" />
              <div>{activePlanet.technologies.Laser}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="IonsIcon.png" />
              <div>{activePlanet.technologies.Ions}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
