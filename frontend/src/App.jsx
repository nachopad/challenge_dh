import { Routes, Route,BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import ApplicantDetail from './components/Applicants/ApplicantDetail'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import SearchBar from './components/Applicants/SearchBar'
import ApplicantsList from './components/Applicants/ApplicantsList'
import ProfessionsList from './components/Professions/ProfessionsList'

const routes = [
  {
    path: '/',
    component: <Home />,
    exact: true
  },
  {
    path: '/search',
    component: <SearchBar />,
    exact: true
  },
  {
    path: '/applicants',
    component: <div className="content-wrap"> <ApplicantsList /> </div>,
    exact: true 
  },
  {
    path: '/applicant/:id',
    component: <ApplicantDetail />,
    exact: true
  },
  {
    path: '/professions',
    component: <div className="content-wrap"> <ProfessionsList /> </div>,
    exact: true 
  }
  

  /*
  TODO: Eliminar este comentario y completar la lista de rutas

  El resultado final deberia quedar algo asi:
  
  {
      path: '/',
      component: Home,
      exact: true
  }

  Donde Home es un componente que se importa de un archivo separado

  import Home from './Home.jsx'
  */
 
]

function App() {

  return (
    <>
      <div className="dashboard">
      <section className="search-wrap">
        <TopBar />
      </section>
      <header className="menu-wrap">
        <Sidebar />
      </header>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.component}
            exact={route.exact}
          />
        ))}
      </Routes>
      </div>
    </>
  )
}

export default App
