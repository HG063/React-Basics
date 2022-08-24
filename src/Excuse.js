import React, { useState } from "react";
import Axios from "axios";

export const Excuse = () => {
  const [excuse, setExcuse] = useState("");

  const handleChange = (value) => {
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${value}`).then(
      (res) => {
        setExcuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div>
      <h1>Get an Excuse!!!</h1>
      <button
        onClick={() => {
          handleChange("family");
        }}
      >
        Family
      </button>
      <button
        onClick={() => {
          handleChange("office");
        }}
      >
        Office
      </button>
      <button
        onClick={() => {
          handleChange("college");
        }}
      >
        College
      </button>
      <br />
      <br />
      {excuse}
    </div>
  );
};
