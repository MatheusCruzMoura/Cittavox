import { useState } from 'react'

import Navbar from '../../head/Navbar'
import BotaoVoltar from '../../botoes/BotaoVoltar'
import Voltar from '../../imagens/Voltar'
import voltarUrl from '../../../assets/icons/back.svg'
import HeadLine from '../../HeadLine/Inicio'
import BodyLogin from '../../body/Login'
import Nunito2 from '../../titulos/Nunito2'


function MenuTop({nome}) {
  const [count, setCount] = useState(0)

  return (
    <BodyLogin>
      <Navbar>
        <BotaoVoltar as='a' href='javascript:history.back()'>
          <Voltar as='img' src={voltarUrl} />
        </BotaoVoltar>
        <Nunito2><div>{nome}</div></Nunito2>
      </Navbar>
      
      <HeadLine />
    </BodyLogin>    
  )
}

export default MenuTop
