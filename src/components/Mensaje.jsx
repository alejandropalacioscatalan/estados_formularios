import React from "react";
import PropTypes from "prop-types";

const Mensaje = ({ text, color }) => {
  return (
    <>
      <div className={color} role="alert">
        {text}
      </div>
    </>
  );
};

Mensaje.PropTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

Mensaje.defaultProps = {
  text: "Sin Título",
  color: "Sin clase",
};

export default Mensaje;
