"use client";

import React from "react";

export default function FleetScreen() {
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
              <div>18.542</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="CloIcon.png" />
              <div>10.472</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="CrIcon.png" />
              <div>4.879</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="VbIcon.png" />
              <div>4.879</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="TrIcon.png" />
              <div>4.879</div>
            </div>

            <div className="max-w-28 flex flex-col items-center justify-center space-y-2 p-2 bg-black/30 rounded-md">
              <img src="DsIcon.png" />
              <div>4.879</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
