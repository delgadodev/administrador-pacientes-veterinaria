import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

import { useState, useEffect } from "react";

function App() {

  const INITIAL = JSON.parse(localStorage.getItem("pacientes")) ?? [];

  const [pacientes, setPacientes] = useState(INITIAL);

  const [paciente, setPaciente] = useState({});

  useEffect(()=>{
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-16">
      <Header />
      <div className="md:flex mt-12 justify-between">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
