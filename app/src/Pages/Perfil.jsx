import { useState } from 'react'

import Navbar from '../components/head/Navbar'
import BotaoVoltar from '../components/botoes/BotaoVoltar'
import Voltar from '../components/imagens/Voltar'

import voltarUrl from '../assets/icons/back.svg'
import HeadLine from '../components/HeadLine/Inicio'
import BodyLogin from '../components/body/Login'
import Nunito2 from '../components/titulos/Nunito2'


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




const reclamações = 7
const Pendentes = 2
const comcluidos = 10

function Perfil() {
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

      <PerfilDados>
        <FotoPerfil as='img' src={FotoPerfilUrl} />

        <Dados>
          <P>Total de reclamações: {reclamações}</P>
          <Ddados>
            <P2>Pendentes {Pendentes}</P2>
            <P2>Comcluidos {comcluidos}</P2>
          </Ddados>
        </Dados>
      </PerfilDados>

      <Informacao>       
        <Roboto11>Nome Completo</Roboto11>
        <InfoPerfil>
            <input id='nomeInfo' placeholder='Nome do Usuário' required />
        </InfoPerfil>

        
        <Roboto11>Genero</Roboto11>
        <InfoPerfil>
            <input id='genero' placeholder='Genero' required />            
        </InfoPerfil>

        <Roboto11>Data de nascimento</Roboto11>
        <InfoPerfil>
             <input type='date' id='dataNascimento' required />            
        </InfoPerfil>

        <Roboto11>Sua descrição</Roboto11>
        <InfoPerfil>
            <input id='descrição' placeholder='Sua descrição' required />            
        </InfoPerfil>

      </Informacao> 

        <HomeMenu2>
          <MenuIcone href='' ><img src={houseMenu} /></MenuIcone>
          <MenuIcone href=''><img src={mapaMenu} /></MenuIcone>
          <MenuIcone href=''><img src={historicoMenu} /></MenuIcone>
          <MenuIcone href='' className='selected'><img src={userSelected} /></MenuIcone>
        </HomeMenu2>

        <RobotoPerfil href=''>Salvar informações</RobotoPerfil>
        <RobotoPerfil2 href=''>Sair da conta</RobotoPerfil2>

    </BodyLogin>    
  )
}

export default Perfil
