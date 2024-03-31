import './App.css'

//Components
import Home from './components/Home'
import Nav from './components/componentesNavbar/Nav'
import SobreMin from './components/SobreMin'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'
import Contato from './components/Contato'

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <SobreMin /> 
      <Habilidades />
      <Projetos />
      <Contato />
    </div>
  )
}

export default App
