import { create } from "zustand";
import { produce } from "immer";

export const use3dOgame = create((set, get) => ({
  empire: {
    planets: [
      {
        name: "Terra",
        fleet: {
          Cle: 100,
          Clo: 100,
          Cr: 100,
          Vb: 100,
          Tr: 100,
          Ds: 100,
        },
        defense: {
          Lm: 100,
          Ll: 100,
          Llo: 100,
          Ions: 100,
          Gauss: 100,
          Plasma: 100,
        },
        technologies: {
          Combustion: 10,
          Energy: 10,
          Laser: 10,
          Impulsion: 10,
          Ions: 10,
          computing: 10,
        },
        resources: { metal: 1000, crystal: 1000, deuterium: 1000 },
      },
      {
        name: "Cassiopeia",
        fleet: {
          Cle: 200,
          Clo: 200,
          Cr: 200,
          Vb: 200,
          Tr: 200,
          Ds: 200,
        },
        defense: {
          Lm: 200,
          Ll: 200,
          Llo: 200,
          Ions: 200,
          Gauss: 200,
          Plasma: 200,
        },
        technologies: {
          Combustion: 2,
          Energy: 2,
          Laser: 2,
          Impulsion: 2,
          Ions: 2,
          computing: 2,
        },
        resources: { metal: 2000, crystal: 2000, deuterium: 2000 },
      },
      {
        name: "Andromeda",
        fleet: {
          Cle: 300,
          Clo: 300,
          Cr: 300,
          Vb: 300,
          Tr: 300,
          Ds: 300,
        },
        defense: {
          Lm: 300,
          Ll: 300,
          Llo: 300,
          Ions: 300,
          Gauss: 300,
          Plasma: 300,
        },
        technologies: {
          Combustion: 3,
          Energy: 3,
          Laser: 3,
          Impulsion: 3,
          Ions: 3,
          computing: 3,
        },
        resources: { metal: 3000, crystal: 3000, deuterium: 3000 },
      },
      {
        name: "Taureus",
        fleet: {
          Cle: 400,
          Clo: 400,
          Cr: 400,
          Vb: 400,
          Tr: 400,
          Ds: 400,
        },
        defense: {
          Lm: 400,
          Ll: 400,
          Llo: 400,
          Ions: 400,
          Gauss: 400,
          Plasma: 400,
        },
        technologies: {
          Combustion: 4,
          Energy: 4,
          Laser: 4,
          Impulsion: 4,
          Ions: 4,
          computing: 4,
        },
        resources: { metal: 4000, crystal: 4000, deuterium: 4000 },
      },
      {
        name: "Eleiasta",
        fleet: {
          Cle: 500,
          Clo: 500,
          Cr: 500,
          Vb: 500,
          Tr: 500,
          Ds: 500,
        },
        defense: {
          Lm: 500,
          Ll: 500,
          Llo: 500,
          Ions: 500,
          Gauss: 500,
          Plasma: 500,
        },
        technologies: {
          Combustion: 5,
          Energy: 5,
          Laser: 5,
          Impulsion: 5,
          Ions: 5,
          computing: 5,
        },
        resources: { metal: 5000, crystal: 5000, deuterium: 5000 },
      },
      {
        name: "Achilleus",
        fleet: {
          Cle: 600,
          Clo: 600,
          Cr: 600,
          Vb: 600,
          Tr: 600,
          Ds: 600,
        },
        defense: {
          Lm: 600,
          Ll: 600,
          Llo: 600,
          Ions: 600,
          Gauss: 600,
          Plasma: 600,
        },
        technologies: {
          Combustion: 6,
          Energy: 6,
          Laser: 6,
          Impulsion: 6,
          Ions: 6,
          computing: 6,
        },
        resources: { metal: 6000, crystal: 6000, deuterium: 6000 },
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
  activePlanetName: "Terra",
  getActivePlanet: () =>
  {
    const planet = get().empire.planets.find(
      (p) => p.name === get().activePlanetName
    );
    if (planet) {
      return planet;
    }
  }
}));
