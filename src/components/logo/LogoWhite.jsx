import React from "react";
import logoStyles from "./logo.module.scss";
import logoLight from "./logo-pic/logo-light.svg";

const LogoWhite = () => {
  return (
    <a className={logoStyles.logo__container}>
      <img src={logoLight} alt="" />
      alt="" />
    </a>
  );
};

export default LogoWhite;
