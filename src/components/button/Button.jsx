import React from "react";
import buttonStyles from "./button.module.scss";

const Button = ({ type, iconLeft, iconRight, children }) => {
    
    return (
    <button type={type} className={buttonStyles.btn}>
        {iconLeft}
        <span className={buttonStyles.btn__text}>{children}</span>
        {iconRight}
    </button>
  );
};
export default Button;
