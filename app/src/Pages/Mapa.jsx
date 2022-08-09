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
import historicoMenu from '../assets/icons/menu/historico-icon.svg'
import userIcon from '../assets/icons/menu/user-icon.svg'
import MapaSelectec from '../assets/icons/menu/mapa-selected.svg'



function Mapa() {
  const [count, setCount] = useState(0)

  return (
    <BodyLogin>
      <Navbar>
        <BotaoVoltar as='a' href='javascript:history.back()'>
          <Voltar as='img' src={voltarUrl} />
        </BotaoVoltar>
        <Nunito2>Mapa de reclamações</Nunito2>
      </Navbar>
      
      <HeadLine />      


        <HomeMenu2>
          <MenuIcone href='/Home' ><img src={houseMenu} /></MenuIcone>
          <MenuIcone href='' className='selected'><img src={MapaSelectec} /></MenuIcone>
          <MenuIcone href='/historico'><img src={historicoMenu} /></MenuIcone>
          <MenuIcone href='/Perfil'><img src={userIcon} /></MenuIcone>
        </HomeMenu2>

    </BodyLogin>    
  )
}

export default Mapa
