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
      </Body>
    </>
  )
}

export default Home
