import './App.css';
import { useState } from "react"

function App() {

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);
  const [cargo, setCargo] = useState("");

  const mostrarDatos = ()=>{
    alert(nombre)
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
            setEdad(event.target.validationMessage);
          }}
          type="number"></input></label>
        <label>Cargo: <input
          onChange={(event) => {
            setCargo(event.target.value);
          }}
          type="text"></input></label>
        <button onClick={mostrarDatos}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
