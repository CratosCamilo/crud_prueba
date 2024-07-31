import './App.css';
import { useState } from "react";
import Axios from "axios";



function App() {

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [cargo, setCargo] = useState("");

  const add = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      edad: edad,
      cargo: cargo
    }).then(() => {
      alert("Usuario registrado")
    });
  }
  return (
    <div className="App">
      <div className="datos">
        <label>Nombre : <input
          onChange={(event) => {
            setNombre(event.target.value);
          }}
          type="text"></input></label>
        <label>Edad: <input
          onChange={(event) => {
            setEdad(event.target.value);
          }}
          type="number"></input></label>
        <label>Cargo: <input
          onChange={(event) => {
            setCargo(event.target.value);
          }}
          type="text"></input></label>
        <button onClick={add}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
