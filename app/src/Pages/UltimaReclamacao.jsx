import { useState } from 'react'

import MenuTop from '../components/menus/MenuTF/MenuTop'
import BodyLogin from '../components/body/Login'

import MenuIcone from '../components/menus/HomeMenu2/MenuIcone'
import HomeMenu2 from '../components/menus/HomeMenu2'

import houseMenu from '../assets/icons/menu/house.svg'
import mapaMenu from '../assets/icons/menu/mapa.svg'
import historicoMenu from '../assets/icons/menu/historico-selected.svg'
import user from '../assets/icons/menu/user-icon.svg'



function UltimaReclamacao() {

  return (
    <BodyLogin>
      <MenuTop pagina="Última reclamação"/>

        <HomeMenu2>
          <MenuIcone href='/Home' ><img src={houseMenu} /></MenuIcone>
          <MenuIcone href='/mapa'><img src={mapaMenu} /></MenuIcone>
          <MenuIcone href='/historico' className='selected'><img src={historicoMenu} /></MenuIcone>
          <MenuIcone href='/perfil'><img src={user} /></MenuIcone>
        </HomeMenu2> 
    </BodyLogin>    
  )
}

export default UltimaReclamacao
