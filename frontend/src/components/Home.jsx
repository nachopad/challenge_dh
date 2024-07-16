import 'bootstrap-icons/font/bootstrap-icons.css';
import ApplicantsList from './Applicants/ApplicantsList';
import ProfessionsList from './Professions/ProfessionsList';

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
          <ProfessionsList />
        </section>
      </main>
  );
}

export default Home;
