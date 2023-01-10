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
            <Route path="/React-Basics" element={<Home />}></Route>
            <Route path="/React-Basics/Profile" element={<Profile />}></Route>
            <Route path="/React-Basics/Contact" element={<Contact />}></Route>
            <Route path="/React-Basics/Counter" element={<Counter />} />
            <Route path="/React-Basics/Job" element={<Job />} />
            <Route path="/React-Basics/GasPlanets" element={<GasPlanets />} />
            <Route path="/React-Basics/TodoList" element={<TodoList />} />
            <Route path="/React-Basics/PredictAge" element={<PredictAge />} />
            <Route path="/React-Basics/DogImage" element={<DogImage />} />
            <Route path="/React-Basics/Form" element={<Form />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
