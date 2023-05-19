import React from "react";
import Promo from "./promo/Promo";
import GalleryList from "./gallery/GalleryList";
import Footer from "./footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Promo />
      <GalleryList />
        <Footer />
    </div>
  );
};

export default HomePage;
