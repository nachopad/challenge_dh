import 'bootstrap-icons/font/bootstrap-icons.css';
import ApplicantsList from './Applicants/ApplicantsList';

function Home() {
  return (
      <main className="content-wrap">
        <header className="preventa">
          <h2>Búsqueda y selección</h2>
          <p className="text-center h5">
            Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.
          </p>
          <div>
            <img src="/assets/images/banner.jpg" alt="Rcursos Humanos" />
          </div>
        </header>
        <ApplicantsList />
        <section className="content profesiones">
          <h2 className="mt-3">Profesiones</h2>
          <div className="list-group shadow-sm p-3 mb-5 rounded">
            <h4 className="list-group-item list-group-item-action active text-center" aria-current="true">
              Listado de Profesiones
            </h4>
            <button type="button" className="list-group-item list-group-item-action text-center">
              Abogado
            </button>
            <button type="button" className="list-group-item list-group-item-action text-center">
              Arquitecto
            </button>
            <button type="button" className="list-group-item list-group-item-action text-center">
              Botánico
            </button>
            <button type="button" className="list-group-item list-group-item-action text-center">
              Computista
            </button>
            <button type="button" className="list-group-item list-group-item-action text-center">
              Economista
            </button>
            <button type="button" className="list-group-item list-group-item-action text-center">
              Técnico de sonido
            </button>
            <button type="button" className="list-group-item list-group-item-action text-center">
              Profesor
            </button>
            <button type="button" className="list-group-item list-group-item-action text-center">
              Linguista
            </button>
          </div>
        </section>
      </main>
  );
}

export default Home;
