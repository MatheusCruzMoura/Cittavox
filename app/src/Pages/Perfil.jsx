import { useState } from 'react'

import BodyLogin from '../components/body/Login'

import FotoPerfil from '../components/imagens/FotoPerfil'
import FotoPerfilUrl from '../assets/ftperfil.png.svg'

import Dados from '../components/menus/PerfilMenu/dados'
import Ddados from '../components/menus/PerfilMenu/DividirDados'
import PerfilDados from '../components/menus/PerfilMenu'
import P from '../components/menus/PerfilMenu/P'
import P2 from '../components/menus/PerfilMenu/P2'

import Informacao from '../components/menus/PerfilMenu/Informacoes'
import Roboto11 from '../components/menus/PerfilMenu/Roboto11'
import InfoPerfil from '../components/inputs/inputPerfil'

import HomeMenu2 from '../components/menus/HomeMenu2'
import MenuIcone from '../components/menus/HomeMenu2/MenuIcone'
import houseMenu from '../assets/icons/menu/house.svg'
import mapaMenu from '../assets/icons/menu/mapa.svg'
import historicoMenu from '../assets/icons/menu/historico-icon.svg'
import userSelected from '../assets/icons/menu/user-selected.svg'
import RobotoPerfil from '../components/titulos/RobotoPerfil'
import RobotoPerfil2 from '../components/titulos/RobotoPerfil/index2'
import MenuTop from '../components/menus/MenuTF/MenuTop'


const nome = 'Jorge Cruz de moura'
const genero = 'Masculino'
const descricao = 'Reclamo, logo existo'
const dataNascimento = '1970-05-11'

const reclamações = 20384
const Pendentes = 20383

function Perfil() {

  return (
    <BodyLogin>

      <MenuTop pagina="Perfil"/>

      <PerfilDados>
        <FotoPerfil as='img' src={FotoPerfilUrl} />

        <Dados>
          <P>Total de reclamações: {reclamações}</P>
          <Ddados>
            <P2>Pendentes {Pendentes}</P2>
            <P2>Comcluidos {reclamações-Pendentes}</P2>
          </Ddados>
        </Dados>
      </PerfilDados>

      <Informacao>       
        <Roboto11>Nome Completo</Roboto11>
        <InfoPerfil>
            <input id='nomeInfo' placeholder={nome} required />
        </InfoPerfil>
        
        <Roboto11>Genero</Roboto11>
        <InfoPerfil>
            <input id='genero' placeholder={genero} required />            
        </InfoPerfil>

        <Roboto11>Data de nascimento</Roboto11>
        <InfoPerfil>
             <input type='date' id='dataNascimento' value={dataNascimento} required />            
        </InfoPerfil>

        <Roboto11>Sua descrição</Roboto11>
        <InfoPerfil>
            <input id='descrição' placeholder={descricao} required />            
        </InfoPerfil>

      </Informacao> 

      <RobotoPerfil href=''>Salvar informações</RobotoPerfil>
      <RobotoPerfil2 href='/'>Sair da conta</RobotoPerfil2>

        <HomeMenu2>
          <MenuIcone href='/Home' ><img src={houseMenu} /></MenuIcone>
          <MenuIcone href='/mapa'><img src={mapaMenu} /></MenuIcone>
          <MenuIcone href='/historico'><img src={historicoMenu} /></MenuIcone>
          <MenuIcone href='/perfil' className='selected'><img src={userSelected} /></MenuIcone>
        </HomeMenu2>
      </BodyLogin>    
  )
}

export default Perfil
