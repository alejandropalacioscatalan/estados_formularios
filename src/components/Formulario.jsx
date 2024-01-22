import { useState } from "react";
import "./Mensaje";
import "./Formulario.css";
import Mensaje from "./Mensaje";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [colorMensaje, setColor] = useState("");
  const validarDatos = (e) => {
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    e.preventDefault();

    setColor("alert alert-danger");
    if (
      nombre === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setError("* Completar toda la información");
      return;
    } else if (!validEmail.test(email)) {
      setError("* Debe ingresar un email válido");
      return;
    } else if (password !== confirmPassword) {
      setError("* Claves deben ser coincidentes");
      return;
    } else {
      setColor("alert alert-primary");
      setError("Datos enviados corretamente !");
      setNombre("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      return;
    }

    setError("");
    setNombre("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setColor("");
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            className="comp form-control"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="comp form-control"
            placeholder="tuemail@ejemplo.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="comp form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            className="comp form-control"
            placeholder="Confirma tu contraseña"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>

      <Mensaje text={error} color={colorMensaje} />

      {console.log(colorMensaje)}
    </>
  );
};

export default Formulario;
