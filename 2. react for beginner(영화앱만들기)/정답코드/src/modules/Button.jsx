import PropTypes from "prop-types";
import { useState } from "react";

const Button = function ({ text }) {
  const [counter, setCounter] = useState(0);
  const onClickFn = function () {
    setCounter((pre) => pre + 1);
  };
  return (
    <div>
      <h3>Total Clicks: {counter}</h3>
      <button onClick={onClickFn}>{text}</button>
    </div>
  );
};

Button.propTypes={
  text: PropTypes.string.isRequired,
}

export default Button;
