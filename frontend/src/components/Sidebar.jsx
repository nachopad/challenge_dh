import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <figure className="user">
          <div className="user-avatar">
            <img src="/assets/images/logo-dh.png" alt="Logo Digital House" />
          </div>
          <NavLink to="/" className="text-decoration-none"><figcaption>Digital House</figcaption></NavLink>
      </figure>
      <nav>
        <section className="menu">
          <h3>Opciones</h3>
          <ul>
            <li>
              <a href="#">
                <i className="bi bi-building" style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}></i>
                  Empresas
              </a>
            </li>
            <li>
              <NavLink to="/applicants" className="text-decoration-none">
                <i className="bi bi-person-plus" style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}></i>
                  Aspirantes
              </NavLink>
            </li>
            <li>
            <NavLink to="/professions" className="text-decoration-none">
                <i className="bi bi-briefcase" style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}></i>
                  Profesiones
              </NavLink>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-person-vcard" style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}></i>
                  Postulate aquí
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-chat-left-text" style={{ fontSize: '1.2rem', color: 'cornflowerblue' }}></i>
                  Contacto
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </>
  )
}

export default Sidebar;
