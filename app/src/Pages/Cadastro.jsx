import { useState } from 'react'

import BodyLogin from '../components/body/Login'

import Navbar from '../components/head/Navbar'
import BotaoVoltar from '../components/botoes/BotaoVoltar'
import Voltar from '../components/imagens/Voltar'
import voltarUrl from '../assets/icons/back.svg'

import Nunito1 from '../components/titulos/Nunito1'
import HeadLine from '../components/HeadLine'

import Roboto3 from '../components/titulos/Roboto3'

import FormCadastro from '../components/forms/FormCadastro'
import emailIcon from '../assets/icons/email.svg'
import userIcon from '../assets/icons/user.svg'
import dateIcon from '../assets/icons/date.svg'
import InputLogin from '../components/inputs/InputLogin'
import senhaIcon from '../assets/icons/senha.svg'

import BotaoEntrar from '../components/botoes/BotaoEntrar'
import LinkCadastro from '../components/botoes/LinkCadastro'

function Cadastro() {
  const [count, setCount] = useState(0)

  return (
    <BodyLogin>
      <Navbar>
        <BotaoVoltar as='a' href='javascript:history.back()'>
          <Voltar as='img' src={voltarUrl} />
        </BotaoVoltar>
        <Nunito1>Cadastro</Nunito1>
      </Navbar>
      
      <HeadLine />

      <Roboto3>Crie sua conta para fazer sua reclamação</Roboto3>

      <FormCadastro action='/'>
        <InputLogin>
          <img src={userIcon} />
          <section>
            <label for='nome'>Nome completo</label>
            <input id='nome' placeholder='Nome do Usuário' required />
          </section>
        </InputLogin>

        <InputLogin>
          <img src={dateIcon} />
          <section>
            <label for='dataNascimento'>Data de nascimento</label>
            <input type='date' id='dataNascimento' required />
          </section>
        </InputLogin>

        <InputLogin>
          <img src={emailIcon} />
          <section>
            <label for='email'>Endereço de email</label>
            <input type='email' id='email' placeholder='exemplo@email.com' required />
          </section>
        </InputLogin>

        <InputLogin>
          <img src={senhaIcon} />
          <section>
            <label for='senha'>Senha</label>
            <input type='password' id='senha' placeholder='*********' required />
          </section>
        </InputLogin>

        <InputLogin>
          <img src={senhaIcon} />
          <section>
            <label for='confirmacaoSenha'>Confirme a senha</label>
            <input type='password' id='confirmacaoSenha' placeholder='*********' required />
          </section>
        </InputLogin>

        <BotaoEntrar type='submit'>Cadastrar</BotaoEntrar>
      </FormCadastro>

      <LinkCadastro href='/login'>Já tem uma conta?<span> clique aqui para entrar</span></LinkCadastro>
    </BodyLogin>
  )
}

export default Cadastro
