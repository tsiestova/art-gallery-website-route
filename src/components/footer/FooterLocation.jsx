import React from "react";
import footerStyles from "./foter-location.module.scss";
import LogoDark from "../logo/LogoDark";

const FooterLocation = () => {

  return (
    <footer
      className={
        `${footerStyles.footer} ${footerStyles.locationMode}`
      }
    >
      <div className={footerStyles.layout}>
        <div className={footerStyles.logo__wrap}>
          <LogoDark />
        </div>
        <div className={footerStyles.footer__description}>
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </div>
        <ul className={footerStyles.social__media__list}>
          <li
            className={`${footerStyles.social__media__item} ${footerStyles.social__media__item_facebook}`}
          >
            <a href="#"></a>
          </li>
          <li
            className={`${footerStyles.social__media__item} ${footerStyles.social__media__item_insta}`}
          >
            <a href="#"></a>
          </li>
          <li
            className={`${footerStyles.social__media__item} ${footerStyles.social__media__item_twitter}`}
          >
            <a href="#"></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterLocation;
