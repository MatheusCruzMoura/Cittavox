import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

// import Inicio from './Pages/Inicio'
import Inicio from './Pages/Inicio'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'
import Historico from './Pages/Historico'
import Mapa from './Pages/Mapa'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/home' element={<Home />} />
          <Route path='/perfil' element={<Perfil/>} />
          <Route path='/historico' element={<Historico/>} />
          <Route path='/mapa' element={<Mapa/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
