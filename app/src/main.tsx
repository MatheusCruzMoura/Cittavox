import React from 'react'
import ReactDOM from 'react-dom/client'

import Reset from './components/styles/generic/Reset'
import Base from './components/styles/elements/Base'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset />
    <Base />
    
    <App />

  </React.StrictMode>
)
