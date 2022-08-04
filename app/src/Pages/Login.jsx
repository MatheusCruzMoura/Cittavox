import { useState } from 'react'

import BodyLogin from '../components/body/Login'

import Navbar from '../components/head/Navbar'
import BotaoVoltar from '../components/botoes/BotaoVoltar'
import Voltar from '../components/imagens/Voltar'
import voltarUrl from '../assets/icons/back.svg'
import Nunito1 from '../components/titulos/Nunito1'
import HeadLine from '../components/HeadLine'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <BodyLogin>
      <Navbar>
        <BotaoVoltar as='a' href='javascript:history.back()'>
          <Voltar as='img' src={voltarUrl} />
        </BotaoVoltar>
        <Nunito1>Entrar na conta</Nunito1>
      </Navbar>
      
      <HeadLine />


    </BodyLogin>
  )
}

export default Login
