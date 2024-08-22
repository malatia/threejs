"use client";

import React from "react";

export default function TechnologiesScreen() {
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
              <div>18.542</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="EnergyIcon.png" />
              <div>10.472</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="ImpulsIcon.png" />
              <div>4.879</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="LaserIcon.png" />
              <div>4.879</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="IonsIcon.png" />
              <div>4.879</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
