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
    component: <div style={{padding: "1rem", background: "#f09"}}>Ejemplo</div>,
    exact: true
  }
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
