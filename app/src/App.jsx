import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom"

import Inicio from './Pages/Inicio'
import Login from './Pages/Login'
import Cadastro from './Pages/Cadastro'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'

import autenticar from './auth'

// function PrivateRoute({ children }) {
  
//   const autenticado = autenticar();

//   return autenticado ? children : <Navigate to='/login'/>;

// }

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

          <Route path='/perfil' element={<Perfil />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
