import React from 'react';

export default function PlanetMenu({ planets, onPlanetClick }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column-reverse' }}>
      {planets.map((planet, index) => (
        <li key={index} style={{ margin: '5px 0' }}>
          <button onClick={() => onPlanetClick(planet.Name)}>
            {planet.Name}
          </button>
        </li>
      ))}
    </ul>
  );
}
