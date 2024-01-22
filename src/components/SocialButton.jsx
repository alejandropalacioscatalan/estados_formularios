import React from "react";
import "./SocialButton.css";
import PropTypes from "prop-types";

const SocialButton = ({ id, name, codeCdn }) => {
  return (
    <>
      <div className="ico icon">
        <i class={codeCdn}></i>
      </div>
    </>
  );
};

SocialButton.PropTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  codeCdn: PropTypes.string,
};

SocialButton.defaultProps = {
  id: 1,
  name: "No hay nombre",
  codeCdn: "No se ha encontrado un icono",
};

export default SocialButton;
