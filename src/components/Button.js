import React from "react";
import styles from "./button.module.css";

// Create a template button that we can call to represent all buttons in the
// in the project.
const Button = ({ children, type = "", onClick }) => {
  return (
    <button
      onClick={(ev) => onClick(ev)}
      className={`${styles.button} ${type === 2 ? styles.two : styles.one}  `}
    >
      {children}
    </button>
  );
};

export default Button;
