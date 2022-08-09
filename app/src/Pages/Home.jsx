import { useState } from 'react'

import Body from '../components/body/BodyHome'
import NavbarHome from '../components/head/NavbarHome'

import UserHome from '../components/imagens/User/UserHome'
import userImg from '../assets/icons/userHome.svg'
import notificacaoIcon from '../assets/icons/notificacao.svg'
import Nunito2 from '../components/titulos/Nunito2'

import HeadLine from '../components/HeadLine/Inicio'

import NomeUsuario from '../components/titulos/NomeUsuario'
import HomeBusca from '../components/forms/HomeBusca'
import buscaIcon from '../assets/icons/busca.svg'

import HomeBemVindo from '../components/banners/HomeBemVindo'
import BemVindoImg from '../assets/home-1.svg'
import BannerTitulo from '../components/titulos/BannerHome/BannerTitulo'
import BannerSubtitulo from '../components/titulos/BannerHome/BannerSubtitulo'

import Roboto4 from '../components/titulos/Roboto4'

import HomeMenu1 from '../components/menus/HomeMenu1'
import HomeMenu1Item from '../components/menus/HomeMenu1/HomeMenu1Item'
import ItemTitulo from '../components/menus/HomeMenu1/ItemTitulo'

import reclamacaoIcon from '../assets/icons/reclamacao.svg'
import ultimaReclamacaoIcon from '../assets/icons/ultima-reclamacao.svg'
import historicoIcon from '../assets/icons/historico.svg'
import proximasIcon from '../assets/icons/proximas.svg'

import HomeMenu2 from '../components/menus/HomeMenu2'
import MenuIcone from '../components/menus/HomeMenu2/MenuIcone'
import houseMenu from '../assets/icons/menu/house-selected.svg'
import mapaMenu from '../assets/icons/menu/mapa.svg'
import historicoMenu from '../assets/icons/menu/historico-icon.svg'
import userMenu from '../assets/icons/menu/user-icon.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Body>
        <NavbarHome>
            <UserHome src={userImg} />
            <Nunito2>Inicio</Nunito2>
            <img className='notificacao' src={notificacaoIcon} />
        </NavbarHome>

        <HeadLine />

        <NomeUsuario>
            <h1>Olá, Jorge Cruz!</h1>
            <h2>Bom dia!</h2>
        </NomeUsuario>

        <HomeBusca>
            <input type='text' id='busca' placeholder='Pesquisar empresa ou local' />
            <label for='busca'>
                <img className='busca' src={buscaIcon} />
            </label>
        </HomeBusca>

        <HomeBemVindo>
            <section>
                <BannerTitulo>Bem Vindo!</BannerTitulo>
                <BannerSubtitulo>Faça sua reclamação</BannerSubtitulo>
                <BannerSubtitulo>publica sem medo</BannerSubtitulo>
            </section>

            <img className='imagem' src={BemVindoImg} />
        </HomeBemVindo>

        <Roboto4>Opções disponiveis</Roboto4>
        <HomeMenu1>
            <HomeMenu1Item href=''>
                <img src={reclamacaoIcon} />
                <ItemTitulo>Faça uma reclamação</ItemTitulo>
            </HomeMenu1Item>

            <HomeMenu1Item href=''>
                <img src={ultimaReclamacaoIcon} />
                <ItemTitulo>Última reclamação</ItemTitulo>
            </HomeMenu1Item>
            
            <HomeMenu1Item href=''>
                <img src={historicoIcon} />
                <ItemTitulo>Histórico de reclamações</ItemTitulo>
            </HomeMenu1Item>
            
            <HomeMenu1Item href=''>
                <img src={proximasIcon} />
                <ItemTitulo>Reclamações próxima a você</ItemTitulo>
            </HomeMenu1Item>
        </HomeMenu1>
        
        <HomeMenu2>
            <MenuIcone href='' className='selected'><img src={houseMenu} /></MenuIcone>
            <MenuIcone href='/mapa'><img src={mapaMenu} /></MenuIcone>
            <MenuIcone href='/historico'><img src={historicoMenu} /></MenuIcone>
            <MenuIcone href='/Perfil'><img src={userMenu} /></MenuIcone>
        </HomeMenu2>
      </Body>
    </>
  )
}

export default Home
