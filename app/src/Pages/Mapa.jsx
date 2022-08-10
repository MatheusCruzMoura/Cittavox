import { useState } from 'react'

import BodyLogin from '../components/body/Login'

import HomeMenu2 from '../components/menus/HomeMenu2'
import MenuIcone from '../components/menus/HomeMenu2/MenuIcone'
import houseMenu from '../assets/icons/menu/house.svg'
import historicoMenu from '../assets/icons/menu/historico-icon.svg'
import userIcon from '../assets/icons/menu/user-icon.svg'
import MapaSelectec from '../assets/icons/menu/mapa-selected.svg'

import MenuTop from '../components/menus/MenuTF/MenuTop'



function Mapa() {

  return (
    <BodyLogin>
      <MenuTop pagina="Mapa de reclamações"/>

        <HomeMenu2>
          <MenuIcone href='/Home' ><img src={houseMenu} /></MenuIcone>
          <MenuIcone href='/mapa' className='selected'><img src={MapaSelectec} /></MenuIcone>
          <MenuIcone href='/historico'><img src={historicoMenu} /></MenuIcone>
          <MenuIcone href='/Perfil'><img src={userIcon} /></MenuIcone>
        </HomeMenu2>

    </BodyLogin>    
  )
}

export default Mapa
