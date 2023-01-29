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
        </Routes>
      </Router>
    </>
  )
}

export default App
