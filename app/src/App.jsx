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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <Router>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cadastro' element={<Cadastro />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
