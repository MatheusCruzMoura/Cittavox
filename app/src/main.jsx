import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import App from './App'
import Login from './Pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
