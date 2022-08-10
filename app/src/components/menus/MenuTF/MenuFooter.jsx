import { useState } from 'react'

import BodyLogin from '../../body/Login'
import HomeMenu2 from './../../../components/menus/HomeMenu2'
import MenuIcone from './../../../components/menus/HomeMenu2/MenuIcone'
import houseMenu from '../../../assets/icons/menu/house.svg'
import mapaMenu from '../../../assets/icons/menu/mapa.svg'
import historicoMenu from '../../../assets/icons/menu/historico-selected.svg'
import user from '../../../assets/icons/menu/user-icon.svg'


function MenuFooter() {
  const [count, setCount] = useState(0)

  return (
    <BodyLogin>
        <HomeMenu2>
          <MenuIcone href='/Home' ><img src={houseMenu} /></MenuIcone>
          <MenuIcone href='/mapa'><img src={mapaMenu} /></MenuIcone>
          <MenuIcone href='' className='selected'><img src={historicoMenu} /></MenuIcone>
          <MenuIcone href='/perfil'><img src={user} /></MenuIcone>
        </HomeMenu2>
    </BodyLogin>    
  )
}

export default MenuFooter
