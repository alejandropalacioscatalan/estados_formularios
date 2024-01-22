import React from "react";
import PropTypes from "prop-types";

const Alert = ({ text, color }) => {
  return (
    <>
      <div class={color} role="alert">
        {text}
      </div>
    </>
  );
};

Alert.PropTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

Alert.defaultPropos = {
  text: "Sin texto",
  color: "Sin color",
};

export default Alert;
