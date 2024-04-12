import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./Button.module.css";

function Button({ text }) {
  console.log("i run all the time.");
  const [counter, setCounter] = useState(0);
  const renderClick = () => setCounter((prev) => prev + 1);
  return (
    <div>
      <h3>Total Click:{counter}</h3>
      <button className={styles.title} onClick={renderClick}>
        {text}
      </button>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
