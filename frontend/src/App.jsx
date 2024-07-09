import { Routes, Route,BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import AspirantsDetailID from './components/Apirants/AspirantsDetailID'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import SearchAspirants from './components/Apirants/searchAspirant'
import AspirantsList from './components/Apirants/aspirantsList'

const routes = [
  {
    path: '/',
    component: <Home />,
    exact: true
  },
  {
    path: '/search',
    component: <SearchAspirants />,
    exact: true
  },
  {
    path: '/aspirants',
    component: <div className="content-wrap"> <AspirantsList /> </div>,
    exact: true 
  },
  {
    path: '/aspirant/:id',
    component: <AspirantsDetailID />,
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
