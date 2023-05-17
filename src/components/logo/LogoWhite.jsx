import React from "react";
import logoStyles from "./logo.module.scss";
import logoLight from "./logo-pic/logo-light.svg";
import blackAndWhite from "./logo-pic/white-and-black-logo.svg";
import logoDark from "./logo-pic/logo-dark.svg";

const LogoWhite = () => {
  return (
    <a className={logoStyles.logo__container}>
      <img src={logoLight} alt="" />
      alt="" />
    </a>
  );
};

export default LogoWhite;
