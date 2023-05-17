import React from "react";
import iconStyles from "./icon.module.scss";

const Icon = ({ children }) => {
  return <figure className={iconStyles.icon}>{children}</figure>;
};

export default Icon;
