import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    // Crear el nuevo paciente

    const nuevoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //editando
      nuevoPaciente.id = paciente.id;
    

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? nuevoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});

    } else {
      //nuevo registro
      nuevoPaciente.id = generarId();
      setPacientes([...pacientes, nuevoPaciente]);
    }

    // Reiniciar el form
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <p>Todos los campos son obligatorios</p>
          </Error>
        )}

        <div className="mb-5">
          <label
            className="block text-gray-600 uppercase font-bold "
            htmlFor="nombre"
          >
            Nombre mascota
          </label>
          <input
            id="mascota"
            className="w-full border-2 p-2 mt-2 rounded-md placeholder:text-gray-400"
            type="text"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-600 uppercase font-bold "
            htmlFor="propietario"
          >
            Nombre propietario
          </label>
          <input
            id="propietario"
            className="w-full border-2 p-2 mt-2 rounded-md placeholder:text-gray-400"
            type="text"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-600 uppercase font-bold "
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            className="w-full border-2 p-2 mt-2 rounded-md placeholder:text-gray-400"
            type="email"
            placeholder="Email contacto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-600 uppercase font-bold "
            htmlFor="alta"
          >
            Alta
          </label>
          <input
            id="alta"
            className="w-full border-2 p-2 mt-2 rounded-md "
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-600 uppercase font-bold "
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="w-full border-2 p-2 mt-2 rounded-md "
            type="date"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600  w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer transition-all"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
