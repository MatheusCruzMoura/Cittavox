import { useState } from 'react'

import Navbar from '../components/head/Navbar'
import BotaoVoltar from '../components/botoes/BotaoVoltar'
import Voltar from '../components/imagens/Voltar'

import voltarUrl from '../assets/icons/back.svg'
import HeadLine from '../components/HeadLine/Inicio'
import BodyLogin from '../components/body/Login'
import Nunito2 from '../components/titulos/Nunito2'

import HomeMenu2 from '../components/menus/HomeMenu2'
import MenuIcone from '../components/menus/HomeMenu2/MenuIcone'
import houseMenu from '../assets/icons/menu/house.svg'
import mapaMenu from '../assets/icons/menu/mapa.svg'
import historicoMenu from '../assets/icons/menu/historico-selected.svg'
import user from '../assets/icons/menu/user-icon.svg'


function Historico() {
  const [count, setCount] = useState(0)

  return (
    <BodyLogin>
      <Navbar>
        <BotaoVoltar as='a' href='javascript:history.back()'>
          <Voltar as='img' src={voltarUrl} />
        </BotaoVoltar>
        <Nunito2>Perfil</Nunito2>
      </Navbar>
      
      <HeadLine />

      

        <HomeMenu2>
          <MenuIcone href='/Home' ><img src={houseMenu} /></MenuIcone>
          <MenuIcone href='/home'><img src={mapaMenu} /></MenuIcone>
          <MenuIcone href='' className='selected'><img src={historicoMenu} /></MenuIcone>
          <MenuIcone href='/perfil'><img src={user} /></MenuIcone>
        </HomeMenu2>

    </BodyLogin>    
  )
}

export default Historico
