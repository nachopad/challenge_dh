import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AspirantsList from './Apirants/aspirantsList';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

function Home() {
  return (
    <div className="dashboard">
      <section className="search-wrap">
        <TopBar />
      </section>
      <header className="menu-wrap">
        <Sidebar />
      </header>
      <main className="content-wrap">
        <header className="preventa">
          <h2>Búsqueda y selección</h2>
          <p className="text-center h5">
            Encontramos talento para tu empresa, en todos los cargos administrativos, profesionales y técnicos.
          </p>
          <div>
            <img src="../src/assets/img/banner.jpg" alt="Rcursos Humanos" />
          </div>
        </header>
        <AspirantsList />
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
    </div>
  );
}

export default Home;
