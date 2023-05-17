import React from "react";
import logoStyles from "./logo.module.scss";
import logoDark from "./logo-pic/logo-dark.svg";
import logoLight from "./logo-pic/logo-light.svg";
import logoBlackWhite from "./logo-pic/white-and-black-logo.svg";

const LogoDark = () => {
  return (
    <a className={logoStyles.logo__container}>
      <img src={logoDark} className={logoStyles.logo__black} alt="" />
      alt="" />
    </a>
  );
};

export default LogoDark;
