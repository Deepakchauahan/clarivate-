// import "./App.css";
import { useState } from "react";
import "./App.scss";
import FavContext from "./context/favContext";
import Dashboard from "./pages/dashboard";
import List from "./pages/list";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  const [fav, setFav] = useState([]);
  return (
    <BrowserRouter>
      <FavContext.Provider value={{ fav, setFav }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </FavContext.Provider>
    </BrowserRouter>
  );
}

export default App;
