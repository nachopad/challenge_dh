import { Routes, Route } from 'react-router-dom'
import './App.css'

const routes = [
  {
    path: '/',
    component: "Colocar el componente acá",
    exact: true
  },
  {
    path: '/example',
    component: <div style={{ padding: "1rem", background: "#f09" }}>Ejemplo</div>,
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
      <h1>Hello World!</h1>
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
