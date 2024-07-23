import { useContext } from 'react';
import { InitDataContext } from '../../context/InitDataContext';

function ProfessionsList() {
    const { professions } = useContext(InitDataContext);

  if (!professions) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="list-group shadow-sm p-3 mb-5 rounded">
      <h4 className="list-group-item list-group-item-action active text-center mt-2 fs-4 text-white bg-primary p-3 rounded-top" aria-current="true">
        Listado de Profesiones
      </h4>
      {professions?.map(profession => (
        <button key={profession.id} type="button" className="list-group-item list-group-item-action text-center">
          {profession.title}
        </button>
      ))}
    </div>
  );
}

export default ProfessionsList;
