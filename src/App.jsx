import './App.css'

//Components
import Home from './components/Home'
import Nav from './components/componentesNavbar/Nav'
import SobreMin from './components/SobreMin'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <SobreMin /> 
      <Habilidades />
      <Projetos />
    </div>
  )
}

export default App
