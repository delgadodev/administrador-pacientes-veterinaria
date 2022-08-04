import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className={pacientes.length > 2 ? "md:w-1/2 lg:w-3/5 mx-5 md:h-screen overflow-y-scroll" : "md:w-1/2 lg:w-3/5 mx-5 md:h-screen" }>
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-3xl font-black text-center">Listado pacientes</h2>
          <p className="mt-5 mb-10 text-lg text-center">
            Administra tus {""}
            <span className="font-bold text-indigo-600">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              setPaciente={setPaciente}
              key={paciente.id}
              paciente={paciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-3xl font-black text-center">No hay pacientes</h2>
          <p className="mt-5 mb-10 text-lg text-center">
            Comienza agregando pacientes {""}
            <span className="font-bold text-indigo-600">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
