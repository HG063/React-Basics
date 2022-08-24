import React from "react";
import { useContext } from "react";
import { AppContext } from "./App";
export const Home = () => {
  const { userName } = useContext(AppContext);
  return (
    <div>
      <h1>Home page</h1>
      <h3>My name is {userName}</h3>
    </div>
  );
};
