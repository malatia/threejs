"use client"

import { create } from "zustand";

// Définition du hook Zustand
const useEmpireStore = create((set) => ({
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
    set((state) => {
      const updatedPlanets = state.empire.planets.map((planet) =>
        planet.name === planetName ? { ...planet, fleet: newFleet } : planet
      );
      return { empire: { ...state.empire, planets: updatedPlanets } };
    }),
}));

// Exemple d'utilisation du hook dans un composant
export function FleetManager() {
  const { empire, updatePlanetFleet } = useEmpireStore();

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
