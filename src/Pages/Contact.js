import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const Contact = () => {
  const { userName, phone, setPhone } = useContext(AppContext);
  const [newPhone, setNewPhone] = useState(phone);
  return (
    <div>
      <h1>Contact Page</h1>
      <h3>
        Contact Details of {userName} : {phone}
      </h3>
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
        Change Phone No.
      </button>
    </div>
  );
};
