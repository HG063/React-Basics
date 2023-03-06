import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const { userName, setUserName } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState(userName);
  const ChangeName = (e) => {
    e.preventDefault();
    setUserName(newUserName);
  };
  return (
    <div>
      <h2 className="mt-3">Profile Page</h2>
      <h5>Name : {userName}</h5>
      <p className="mt-3 mb-2">Enter Name to Update:</p>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button onClick={ChangeName}>Submit</button>
    </div>
  );
};
