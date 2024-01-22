import React from "react";
import SocialButton from "./SocialButton";
import Alert from "./Alert";
import "./Registro.css";
import Formulario from "./Formulario";

const Registro = ({ iconos }) => {
  return (
    <>
      <div class="register-container">
        <h2>Crea una cuenta</h2>
        <div className="iconos-grid d-flex justify-content-center gap-3">
          {iconos.length &&
            iconos.map((icono) => (
              <SocialButton
                key={icono.id}
                id={icono.id}
                name={icono.name}
                codeCdn={icono.codeCdn}
              />
            ))}
        </div>
        <div>
          <p>O usa tu email para registrarte</p>
        </div>
        <Formulario />
        <Alert />
      </div>
    </>
  );
};

export default Registro;
