import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Profile } from "./Profile";
import { Contact } from "./Contact";
import NavBar from "./NavBar";
import { useState, createContext } from "react";
import { Counter } from "./Counter";
import { Job } from "./Job";
import { GasPlanets } from "./GasPlanets";
import { TodoList } from "./TodoList";
import { Excuse } from "./Excuse";
import { PredictAge } from "./PredictAge";
import { DogImage } from "./DogImage";
import { Form } from "./Form";

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Harshit Gupta");
  const [phone, setPhone] = useState("+91-7389248920");
  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUserName, phone, setPhone }}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Counter" element={<Counter />} />
            <Route path="/Job" element={<Job />} />
            <Route path="/GasPlanets" element={<GasPlanets />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/Excuse" element={<Excuse />} />
            <Route path="/PredictAge" element={<PredictAge />} />
            <Route path="/DogImage" element={<DogImage />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
