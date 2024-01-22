import "./App.css";
import Formulario from "./components/Formulario";
import Registro from "./components/Registro";

const iconos = [
  {
    id: 1,
    name: "Facebook",
    codeCdn: "fi fi-brands-facebook",
  },
  {
    id: 2,
    name: "Git hub",
    codeCdn: "fi fi-brands-github",
  },
  {
    id: 3,
    name: "Linkedin",
    codeCdn: "fi fi-brands-linkedin",
  },
];

function App() {
  return (
    <>
      <Registro iconos={iconos} />
    </>
  );
}

export default App;
