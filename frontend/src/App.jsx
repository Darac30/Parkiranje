import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import NavBarEdunova from './components/NavBarEdunova'
import { Route, Routes } from 'react-router-dom'
import { RouteNames } from './constants'
import Pocetna from './pages/Pocetna'
import RazinePregled from './pages/razine/RazinePregled'

function App() {
  

  return (
    <Container>
      <NavBarEdunova />
      <Container className="app">
      <Routes>
        <Route path={RouteNames.HOME} element={<Pocetna />} />
        <Route path={RouteNames.RAZINA_PREGLED} element={<RazinePregled />} />
      </Routes>
      </Container>
      
      <hr />
      &copy; Edunova
    </Container>
  )
}

export default App
