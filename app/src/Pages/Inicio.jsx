import Body from '../components/body/Inicio'

import Logo from '../components/titulos/Titulo1'
import logoUrl from '../assets/logo.svg'
import Titulo1 from '../components/titulos/Titulo1'
import Titulo2 from '../components/titulos/Titulo2'
import Botao from '../components/botoes/Botao'
import LinkCadastro from '../components/botoes/LinkCadastro'

function Login() {

  return (
    <>
      <Body>
        <Logo as='img' src={logoUrl} />
        <Titulo1>Cittavox</Titulo1>
        <Titulo2>Gestão colaborativa das cidades</Titulo2>
        <Botao as='a' href='/login'>Entrar na conta</Botao>
        <LinkCadastro href='/cadastro'>Não possui conta?<span>Cadastrar</span></LinkCadastro>
      </Body>
    </>
  )
}

export default Login
