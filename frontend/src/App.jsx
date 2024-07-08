import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import AspirantsDetailID from '../components/Apirants/AspirantsDetailID'

const routes = [
  {
    path: '/',
    component: <Home />,
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
    </>
  )
}

export default App
