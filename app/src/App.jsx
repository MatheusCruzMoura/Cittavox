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
import ReclamacaoEnviada from './Pages/ReclamacaoEnviada'
import CriarReclamacao from './Pages/CriarReclamacao'
import UltimaReclamacao from './Pages/UltimaReclamacao'

function App() {
  
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
          <Route path='/reclamacao-enviada' element={<ReclamacaoEnviada/>} />
          <Route path='/criar-Reclamacao' element={<CriarReclamacao/>} />
          <Route path='/Ultima-Reclamacao' element={<UltimaReclamacao/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
