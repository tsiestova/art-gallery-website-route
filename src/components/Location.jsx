import React from "react";
import promoStyles from "./promo/promo.module.scss";
import button from "./button/Button";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import Button from "./button/Button";
import locationStyles from "./location.module.scss";

const Location = () => {
  return (
    <div className={locationStyles.location__page__wrap}>
      <div className={locationStyles.layout}>
        <Link to="/">
          {HomePage}
          <Button iconLeft>
            <span>BACK TO HOME</span>
          </Button>
        </Link>
      </div>
      <div className={locationStyles.location__section__wrap}>
        <section className={locationStyles.location__section}>
          <div className={locationStyles.layout}>
            <h1 className={locationStyles.heading}>OUR LOCATION</h1>
            <div>
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9pm.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Location;
