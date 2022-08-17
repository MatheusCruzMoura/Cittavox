import React from 'react'
import ReactDOM from 'react-dom/client'

import Reset from './components/styles/generic/Reset'
import Base from './components/styles/elements/Base'
import App from './App'

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <Base />
    
    <App />

  </React.StrictMode>
)
