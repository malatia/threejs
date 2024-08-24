"use client";

import React from "react";
import { use3dOgame } from "../hooks/use3dOgame";


export default function DefensesScreen() {

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
          Defenses
        </span>

        <div className="mt-3">
          <div className="max-w-96 mt-3 flex flex-wrap gap-3 items-end">
            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="LmIcon.png" />
              <div>{activePlanet.defense.Lm}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="LlIcon.png" />
              <div>{activePlanet.defense.Ll}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="LloIcon.png" />
              <div>{activePlanet.defense.Llo}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="IonIcon.png" />
              <div>{activePlanet.defense.Ions}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="GaussIcon.png" />
              <div>{activePlanet.defense.Gauss}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="PlasmaIcon.png" />
              <div>{activePlanet.defense.Plasma}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
