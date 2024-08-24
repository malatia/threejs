import React from "react";
import { use3dOgame } from '@/app/hooks/use3dOgame';

export default function PlanetMenu() {

  const activePlanet = use3dOgame((state) => state.activePlanet)
  const setActivePlanet = use3dOgame((state) => state.setActivePlanet)
  const planets = use3dOgame((state) => state.getPlanetsName())
  
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {planets.map((planet, index) => (
        <li key={index} style={{ margin: "5px 0" }}>
          <button
            className="min-w-32 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={() => setActivePlanet(planet)}
          >
            {planet}
          </button>
        </li>
      ))}
    </ul>
  );
}
