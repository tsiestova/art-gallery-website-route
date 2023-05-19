import React from "react";
import { Link } from "react-router-dom";
import Button from "./button/Button";
import locationStyles from "./location.module.scss";
import Icon from "./button/Icon"
import IconRight from "./button/icon-arrow-left.svg"
import Map from "./map/Map"
import layoutStyles from "../components/layout.module.scss";
import FooterLocation from "./footer/FooterLocation";

const Location = () => {

  return (
      <>
          <div className={locationStyles.location__page__wrap}>
              <div className={layoutStyles.layout}>
                  <div className={locationStyles.btn__wrap}>
                      <Link to="/">
                          <Button type="button"
                                  iconLeft={ <Icon>
                                      <img src={IconRight} alt="" />
                                  </Icon>}
                          >
                              BACK TO HOME
                          </Button>

                      </Link>
                  </div>
              </div>
              <Map />
              <div className={locationStyles.location__section__wrap}>
                  <section className={locationStyles.location__section}>
                      <div className={locationStyles.layout}>
                          <h1 className={locationStyles.heading}>OUR LOCATION</h1>
                          <div>
                              <div className={locationStyles.address}>99 King Street</div>
                              <div className={locationStyles.address__description}>
                                  <span>Newport</span> <span>RI 0284</span>
                                  <span>United States of America</span>
                              </div>
                              <div className={locationStyles.address__description}>
                                  Our newly opened gallery is located near the Edward King House on 99 King Street, the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
                              </div>
                              <div>
                                  Our newly opened gallery is located near the Edward King House on
                                  99 King Street, the Modern Art Gallery is free to all visitors and
                                  open seven days a week from 8am to 9pm.
                              </div>
                          </div>
                      </div>
                  </section>
              </div>
          </div>
          <FooterLocation />
      </>
  );
};

export default Location;
