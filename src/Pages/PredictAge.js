import React, { useEffect, useState } from "react";
import Axios from "axios";

export const PredictAge = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  const handleChange = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
   handleChange();
   // eslint-disable-next-line
  },[]);

  return (
    <div>
      <h2 className="mt-3">Predict the Age!!!</h2>
      <input
        type="text"
        className="mt-2"
        placeholder="Enter Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <button onClick={handleChange}>Predict Age</button>
      <br />
      <h5 className="mt-3">Name : {data.name}</h5>
      <h5>Age : {data.age}</h5>
    </div>
  );
};
