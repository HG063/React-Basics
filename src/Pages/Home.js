import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";
export const Home = () => {
  const { userName } = useContext(AppContext);
  return (
    <div className="mt-3">
      <h2>Home page</h2>
      <h5>My name is {userName}</h5>
    </div>
  );
};
