import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { Contact } from "./Pages/Contact";
import NavBar from "./Components/NavBar";
import { useState, createContext } from "react";
import { Counter } from "./Pages/Counter";
import { Job } from "./Pages/Job";
import { GasPlanets } from "./Pages/GasPlanets";
import { TodoList } from "./Pages/TodoList";
import { PredictAge } from "./Pages/PredictAge";
import { DogImage } from "./Pages/DogImage";
import { Form } from "./Pages/Form";

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
