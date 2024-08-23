"use client"

import React from 'react';
import { use3dOgame } from '@/app/hooks/use3dOgame'; // Assurez-vous que le chemin est correct

function FleetManager() {
  const empire = use3dOgame((state) => state.empire)
  const updatePlanetFleet = use3dOgame((state) => state.updatePlanetFleet)  
  const getActivePlanet = use3dOgame((state) => state.getActivePlanet)
  
  
  // Exemple de sélection de la planète "Terra"  
  const terra = getActivePlanet()
  console.log(terra);

  // Fonction pour mettre à jour la flotte de Terra
  const addFightersToTerra = () => {
    const newFleet = {
      ...terra.fleet,
      Cle: terra.fleet.Cle + 100, // Ajout de 100 chasseurs
    };
    updatePlanetFleet("Terra", newFleet);
  };

  return (
    <div>
      <h1>Gestion de la flotte de Terra</h1>
      <ul>
        <li>Chasseurs légers : {terra.fleet.Cle}</li>
        <li>Chasseurs lourds : {terra.fleet.Clo}</li>
        <li>Croiseurs : {terra.fleet.Cr}</li>
        <li>Vaisseaux de bataille : {terra.fleet.Vb}</li>
        <li>Traqueurs  : {terra.fleet.Tr}</li>
        <li>Destroyers : {terra.fleet.Ds}</li>
      </ul>
      <button onClick={addFightersToTerra}>Ajouter 100 chasseurs légers</button>
    </div>
  );
}

export default FleetManager;
