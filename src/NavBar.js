import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          navigate("/Profile");
        }}
      >
        Profile
      </button>
      <button
        onClick={() => {
          navigate("/Contact");
        }}
      >
        Contact
      </button>
      <button
        onClick={() => {
          navigate("/Counter");
        }}
      >
        Counter
      </button>
      <button
        onClick={() => {
          navigate("/Job");
        }}
      >
        Job
      </button>
      <button
        onClick={() => {
          navigate("/GasPlanets");
        }}
      >
        Planets
      </button>
      <button
        onClick={() => {
          navigate("/TodoList");
        }}
      >
        TodoList
      </button>

      <button
        onClick={() => {
          navigate("/Excuse");
        }}
      >
        Excuse
      </button>
      <button
        onClick={() => {
          navigate("/PredictAge");
        }}
      >
        Predict Age
      </button>
      <button
        onClick={() => {
          navigate("/DogImage");
        }}
      >
        Dog Image
      </button>
      <button
        onClick={() => {
          navigate("/Form");
        }}
      >
        Form
      </button>
      {/* <Link to="/">Home</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Contact">Contact</Link> */}
    </div>
  );
}
