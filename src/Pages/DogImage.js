import React, { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";

export const DogImage = () => {
  const [image, getImage] = useState("");

  const handleChange = () => {
    Axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      getImage(res.data.message);
    });
  };

  useEffect(() => {
  handleChange();
  }, []);

  return (
    <div>
      <h2 className="mt-3">Generate a Dog Image !!!</h2>
      <button
        className="mt-2"
        onClick={() => {
          handleChange();
        }}>
        Dog Image
      </button>
      <br />
      <img className="mt-3" src={image} alt="Dog" height={300} width={300} />
    </div>
  );
};
