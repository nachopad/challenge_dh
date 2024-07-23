import { Routes, Route,BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'
import ApplicantDetail from './components/Applicants/ApplicantDetail'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import SearchBar from './components/Applicants/SearchBar'
import ApplicantsList from './components/Applicants/ApplicantsList'
import ProfessionsList from './components/Professions/ProfessionsList'
import ApplicantForm from './components/Applicants/ApplicantForm'
import Team from './components/Team'

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
    path: '/register/aplicant',
    component: <div className="content-wrap"> <ApplicantForm /> </div>,
    exact: true 
  },
  {
    path: '/professions',
    component: <div className="content-wrap"> <ProfessionsList /> </div>,
    exact: true 
  },
  {
    path: '/team',
    component: <div className="content-wrap"> <Team /> </div>,
    exact: true 
  }
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
