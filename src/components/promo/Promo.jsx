import React from "react";
import promoStyles from "./promo.module.scss";
import layoutStyles from "../layout.module.scss";
import Button from "../button/Button";
import ResponsivePicture from "../picture/ResponsivePicture";
import LogoBlackAndWhite from "../logo/LogoBlackAndWhite";
import LogoDark from "../logo/LogoDark";
import { Link } from "react-router-dom";
import IconRight from "../button/icon-arrow-right.svg"
import Icon from "../button/Icon"

const Promo = () => {

  return (
      <div className={promoStyles.promo__wrap}>
        <div className={promoStyles.promo}>
          <div className={promoStyles.pic__wrap}>
            <div className={promoStyles.logo__wrap__white_dark}>
              <LogoBlackAndWhite />
            </div>

            <ResponsivePicture
                path={"./assets/hero/image-hero.jpg"}
                sizes={["1200", "768"]}
            />
          </div>
          <div className={promoStyles.top__container}>
            <div className={layoutStyles.layout}>
              <div className={promoStyles.logo__wrap__dark}>
                <LogoDark />
              </div>

              <div className={promoStyles.text__block__wrap}>
                <div className={promoStyles.promo__description}>
                  The arts in the collection of the Modern Art Gallery all started
                  from a spark of inspiration. Will these pieces inspire you? Visit
                  us and find out.
                </div>
                <div className={promoStyles.btn__wrap}>
                  <Link to="location">
                    <Button type="button"
                            iconRight={<Icon>
                              <img src={IconRight} alt="" />
                            </Icon>}
                    >
                      OUR LOCATION
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Promo;
