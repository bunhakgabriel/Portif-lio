import './App.css'

//Components
import Home from './components/Home'
import Nav from './components/Nav'
import SobreMin from './components/SobreMin'
import Habilidades from './components/Habilidades'

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <SobreMin /> 
      <Habilidades />
    </div>
  )
}

export default App
