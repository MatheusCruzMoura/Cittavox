import MenuTop from '../components/menus/MenuTF/MenuTop'
import BodyLogin from '../components/body/Login'
import HomeMenu2 from '../components/menus/HomeMenu2'
import MenuIcone from '../components/menus/HomeMenu2/MenuIcone'
import houseMenu from '../assets/icons/menu/house.svg'
import mapaMenu from '../assets/icons/menu/mapa.svg'
import historicoMenu from '../assets/icons/menu/historico-selected.svg'
import user from '../assets/icons/menu/user-icon.svg'
import buscaIcon from '../assets/icons/busca.svg'
import HomeBusca from '../components/forms/HomeBusca'
import RuaCleiton from '../assets/historicoFoto.svg'
import CardRecamacoes from '../components/historico/cardRecamacoes'

import { useState, useEffect } from 'react'

function Historico() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:5173/historico", {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => { })
      .catch((err) => console.log(err))
  }, [])

  return (
    <BodyLogin>
      <MenuTop pagina="Historico de Reclamações" />

      <HomeBusca>
        <input type='text' id='busca' placeholder='Pesquisar por empresa' />
        <label for='busca'>
          <img className='busca' src={buscaIcon} />
        </label>
      </HomeBusca>

      <CardRecamacoes data="18-08-2022" empresa="Compesa" foto={RuaCleiton} />
      <CardRecamacoes data="10-11-2020" empresa="NeoEnergia" foto={RuaCleiton} />
        
        {/*        
         {projects.length > 0 &&
        projects.map((project) => <CardRecamacoes
          data="18-08-2022"
          empresa="Compesa"
          foto={RuaCleiton} />
        )}
        */}   

      <HomeMenu2>
        <MenuIcone href='/Home' ><img src={houseMenu} /></MenuIcone>
        <MenuIcone href='/mapa'><img src={mapaMenu} /></MenuIcone>
        <MenuIcone href='/historico' className='selected'><img src={historicoMenu} /></MenuIcone>
        <MenuIcone href='/perfil'><img src={user} /></MenuIcone>
      </HomeMenu2>
    </BodyLogin>
  )
}

export default Historico
