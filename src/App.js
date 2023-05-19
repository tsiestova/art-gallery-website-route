import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import React from "react";
import Location from "./components/Location";

function App() {
 const location = useLocation();
 const path = location.pathname;

    return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="location" element={<Location />} />
      </Routes>
        }
    </div>
  );
}

export default App;
