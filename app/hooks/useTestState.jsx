"use client"

import { create } from "zustand";
import { produce } from "immer";

export const useTestState = create((set) => ({
  empire: {
    planets: [
      {
        name: "Terra",
        fleet: {
          fighter: 500,
          bomber: 100,
          destroyer: 50,
          cruiser: 200,
          frigate: 150,
          carrier: 5,
        },
        defense: {
          laserCannon: 300,
          ionCannon: 200,
          plasmaCannon: 150,
          missileBattery: 500,
          particleBeam: 100,
          shieldGenerator: 10,
        },
        technologies: {
          propulsion: 8,
          weaponry: 7,
          shields: 5,
          energy: 6,
          computing: 9,
        },
        resources: { metal: 5000, crystal: 3000, deuterium: 2000 },
      },
      // Ajouter d'autres planètes ici
    ],
  },
  updatePlanetFleet: (planetName, newFleet) =>
    set((state) =>
      produce(state, (draft) => {
        const planet = draft.empire.planets.find((p) => p.name === planetName);
        if (planet) {
          planet.fleet = newFleet;
        }
      })
    ),
}));


export function FleetManagerTest() {
    const { empire, updatePlanetFleet } = useTestState();
  
    // Exemple de mise à jour de la flotte
    const updateFleet = () => {
      const newFleet = { ...empire.planets[0].fleet, fighter: 600 };
      updatePlanetFleet("Terra", newFleet);
    };
  
    return (
      <div>
        <h1>Fleet on Terra</h1>
        <p>Fighter: {empire.planets[0].fleet.fighter}</p>
        <button onClick={updateFleet}>Add Fighters</button>
      </div>
    );
  }