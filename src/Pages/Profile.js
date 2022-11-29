import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const { userName, setUserName } = useContext(AppContext);
  const [newUserName, setNewUserName] = useState(userName);
  const ChangeName = () => {
    setUserName(newUserName);
  };
  return (
    <div>
      <h1>Profile Page</h1>
      <h3>Name : {userName}</h3>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => {
          setNewUserName(event.target.value);
        }}
      />
      <button onClick={ChangeName}>Change Name</button>
    </div>
  );
};
