import React, { useState } from "react";
import Axios from "axios";

export const PredictAge = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const handleChange = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setData(res.data);
    });
  };
  return (
    <div>
      <h1>Predict the Age!!!</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={handleChange}>Predict Age</button>
      <br />
      <h3>Name : {data.name}</h3>
      <h3>Age : {data.age}</h3>
    </div>
  );
};
