import { useState } from 'react'

import Body from '../components/body/Inicio'

import Logo from '../components/titulos/Titulo1'
import logoUrl from '../assets/logo.svg'
import Titulo1 from '../components/titulos/Titulo1'
import Titulo2 from '../components/titulos/Titulo2'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Body>
        <Logo as='img' src={logoUrl} />
        <Titulo1>Cittavox</Titulo1>
        <Titulo2>Gestão colaborativa das cidades</Titulo2>
      </Body>
    </>
  )
}

export default Login
