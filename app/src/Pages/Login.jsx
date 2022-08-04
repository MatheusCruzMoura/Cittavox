import { useState } from 'react'

import Body from '../components/body/Inicio'
import Titulo1 from '../components/titulos/Titulo1'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <Body>
      <Titulo1>Cittavox</Titulo1>
    </Body>
  )
}

export default Login
