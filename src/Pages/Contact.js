import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const Contact = () => {
  const { userName, phone, setPhone } = useContext(AppContext);
  const [newPhone, setNewPhone] = useState(phone);
  return (
    <div>
      <h2 className="mt-3">Contact Page</h2>
      <h5>
        Contact Details of {userName} : {phone}
      </h5>
      <p className="mt-3 mb-2">Enter Number to Update:</p>
      <input
        type="text"
        placeholder="Enter Phone Number"
        onChange={(event) => {
          setNewPhone(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setPhone(newPhone);
        }}>
        Submit
      </button>
    </div>
  );
};
