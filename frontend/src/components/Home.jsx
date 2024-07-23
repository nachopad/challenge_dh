import 'bootstrap-icons/font/bootstrap-icons.css';
import ApplicantsList from './Applicants/ApplicantsList';
import ProfessionsList from './Professions/ProfessionsList';

function Home() {
  return (
      <main className="content-wrap">
        <header className="preventa">
          <h2 className="fs-2">Búsqueda y selección</h2>
          <p className="text-center fs-5">
            Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.
          </p>
          <div className=' m-3 rounded'>
            <img className="img-fluid rounded" src="/assets/images/banner.jpg" alt="Rcursos Humanos" />
          </div>
        </header>
        <section className="content aspirantes">
          <ApplicantsList />
        </section>
        <section className="content profesiones">
          <ProfessionsList />
        </section>
      </main>
  );
}

export default Home;
