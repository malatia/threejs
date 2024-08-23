"use client";

import React from "react";
import { use3dOgame } from "../hooks/use3dOgame";

export default function FleetScreen() {

  const getActivePlanet = use3dOgame(state => state.getActivePlanet)
  const activePlanet = getActivePlanet()  
  console.log(activePlanet);
  
  
  return (
    <>
      <div className="p-5 mt-5 text-center bg-gradient-to-br from-blue-200/20 to-blue-500/20 rounded-xl">
        <span className="p-2 italic bg-clip-text text-transparent bg-gradient-to-b from-white/90 to-white/70 text-3xl font-bold uppercase inline-block">
          Flotte
        </span>

        <div className="mt-3">
          <div className="max-w-96 mt-3 flex flex-wrap gap-3 items-end">
            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="ClIcon.png" />
              <div>{activePlanet.fleet.Cle}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="CloIcon.png" />
              <div>{activePlanet.fleet.Clo}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="CrIcon.png" />
              <div>{activePlanet.fleet.Cr}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="VbIcon.png" />
              <div>{activePlanet.fleet.Vb}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="TrIcon.png" />
              <div>{activePlanet.fleet.Tr}</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="DsIcon.png" />
              <div>{activePlanet.fleet.Ds}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
