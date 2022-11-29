import React, { useState } from "react";
import planets from "../Components/Planets";
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
        }}>
        GasPlanets
      </button>
      <button
        onClick={() => {
          setShowNotGas(!showNotGas);
          showGas ? setShowGas(!showGas) : setShowGas(showGas);
        }}>
        Planets
      </button>
      {showGas && !planets.GasPlanets && <h2 className="mt-3">Gas Planets</h2>}
      {showGas &&
        planets.map(
          (planets) => planets.isGasPlanet && <h5>{planets.name}</h5>
        )}
      {showNotGas && !planets.GasPlanets && <h2 className="mt-3">Planets</h2>}
      {showNotGas &&
        planets.map(
          (planets) => !planets.isGasPlanet && <h5>{planets.name}</h5>
        )}
    </div>
  );
};
