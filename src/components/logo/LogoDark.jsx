import React from "react";
import logoStyles from "./logo.module.scss";
import logoDark from "./logo-pic/logo-dark.svg";

const LogoDark = () => {
  return (
    <a className={logoStyles.logo__container}>
      <img src={logoDark} alt="" />
      alt="" />
    </a>
  );
};

export default LogoDark;
