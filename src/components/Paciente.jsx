const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar este paciente?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="m-3 px-5 py-10 rounded-xl bg-white shadow-md">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-5">
        <button
          type="button"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-all uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-all uppercase"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
