import React from "react";
import logoStyles from "./logo.module.scss";
import blackAndWhite from "./logo-pic/white-and-black-logo.svg";

const LogoBlackAndWhite = () => {
  return (
    <a className={logoStyles.logo__container}>
      <img src={blackAndWhite} alt="" />
      alt="" />
    </a>
  );
};

export default LogoBlackAndWhite;
