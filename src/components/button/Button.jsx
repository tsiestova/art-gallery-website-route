import React from "react";
import buttonStyles from "./button.module.scss";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import IconArrowRight from "./icon-arrow-right.svg";

const Button = ({ icon }) => {
  return (
    <button className={buttonStyles.btn}>
      OUR LOCATION
      <Icon>
        <img src={icon} alt="" />
      </Icon>
    </button>
  );
};
export default Button;
