import React, { useState } from "react";
import planets from "./Planets";
export const GasPlanets = () => {
  const [showGas, setShowGas] = useState(false);
  const [showNotGas, setShowNotGas] = useState(false);
  return (
    <div>
      <br />
      <button
        onClick={() => {
          setShowGas(!showGas);
          showNotGas ? setShowNotGas(!showNotGas) : setShowNotGas(showNotGas);
        }}
      >
        GasPlanets
      </button>
      <button
        onClick={() => {
          setShowNotGas(!showNotGas);
          showGas ? setShowGas(!showGas) : setShowGas(showGas);
        }}
      >
        Planets
      </button>
      {showGas && !planets.GasPlanets && <h1>Gas Planets</h1>}
      {showGas &&
        planets.map(
          (planets) => planets.isGasPlanet && <h3>{planets.name}</h3>
        )}
      {showNotGas && !planets.GasPlanets && <h1>Planets</h1>}
      {showNotGas &&
        planets.map(
          (planets) => !planets.isGasPlanet && <h3>{planets.name}</h3>
        )}
    </div>
  );
};
