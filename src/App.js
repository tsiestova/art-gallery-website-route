import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import promoStyles from "./components/promo/promo.module.scss";
import React from "react";
import Location from "./components/Location";
import Footer from "./components/footer/Footer";

function App() {
 const location = useLocation();
 const path = location.pathname;

    return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="location" element={<Location />} />
      </Routes>
        {path === "/location" ?
            <Footer path={"location"} />
            :  <Footer path={"home"} />
        }
    </div>
  );
}

export default App;
