import React, { useState } from "react";
import Axios from "axios";

export const DogImage = () => {
  const [image, getImage] = useState("");

  const handleChange = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      getImage(res.data.message);
    });
  };
  return (
    <div>
      <h1>Generate a Dog Image !!!</h1>
      <button
        onClick={() => {
          handleChange();
        }}
      >
        Dog Image
      </button>
      <br />
      <br />
      <img src={image} alt="Dog" height={300} width={300} />
    </div>
  );
};
