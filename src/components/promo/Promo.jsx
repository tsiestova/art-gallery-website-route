import React from "react";
import promoStyles from "./promo.module.scss";
import layoutStyles from "../layout.module.scss";
import Button from "../button/Button";
import ResponsivePicture from "../picture/ResponsivePicture";
import LogoBlackAndWhite from "../logo/LogoBlackAndWhite";
import LogoDark from "../logo/LogoDark";
import { Link } from "react-router-dom";
import IconArrowRight from "../button/icon-arrow-right.svg";

const Promo = () => {
  return (
    <div className={promoStyles.promo}>
      {/*<div className={promoStyles.logo__wrap}>*/}
      {/*  /!*<LogoDark />*!/*/}
      {/*  /!*<LogoBlackAndWhite />*!/*/}
      {/*</div>*/}
      <div className={promoStyles.pic__wrap}>
        <ResponsivePicture
          path={"./assets/hero/image-hero.jpg"}
          sizes={["1200", "768"]}
        />
      </div>
      <div className={promoStyles.top__container}>
        <div className={layoutStyles.layout}>
          <div className={promoStyles.logo__wrap}>
            <LogoDark />
            {/*<LogoBlackAndWhite />*/}
          </div>
          <div className="promo__text-block__wrap">
            <div className={promoStyles.promo__description}>
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </div>
            <div className={promoStyles.btn__wrap}>
              <Link to="location">
                <Button icon={IconArrowRight}>OUR LOCATION</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
