import React from "react";
import Promo from "./promo/Promo";
import GalleryList from "./gallery/GalleryList";
import Footer from "./footer/Footer";

const HomePage = ({path}) => {
  return (
    <div>
      <Promo />
      <GalleryList />
    </div>
  );
};

export default HomePage;
