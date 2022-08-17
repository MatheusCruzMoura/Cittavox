import React from "react";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom"

import BodyLogin from '../components/body/Login'

import MenuTop from '../components/menus/MenuTF/MenuTop'

import Roboto1 from '../components/titulos/Roboto1'
import Roboto2 from '../components/titulos/Roboto2'
import FormLogin from '../components/forms/FormLogin'
import emailIcon from '../assets/icons/email.svg'
import InputLogin from '../components/inputs/InputLogin'
import senhaIcon from '../assets/icons/senha.svg'
import olhoIcon from '../assets/icons/olho.svg'

import BotaoEntrar from '../components/botoes/BotaoEntrar'
import LinkCadastro from '../components/botoes/LinkCadastro'
import api from "../Api";


function mostrarSenha(id) {
  const x = document.getElementById(id);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function Login() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmit = data => {
    
    // api.post("/login", data).the

    navigate("/home")
    // console.log(data)
    console.log(JSON(data))
  };

  return (
    <BodyLogin>

      <MenuTop pagina="Entrar na conta"/>

      <Roboto1>Bem vindo de volta!</Roboto1>
      <Roboto2>entre na conta para continuar</Roboto2>

      <FormLogin onSubmit={handleSubmit(onSubmit)}>
        <InputLogin>
          <img src={emailIcon} />
          <section>
            <label for='email'>Endereço de email</label>
            <input id='email' placeholder='exemplo@email.com' {...register("email", { required: true }, {maxLength: 64})} />
          </section>
        </InputLogin>

        <InputLogin>
          <img src={senhaIcon} />
          <section>
            <label for='senha'>Senha</label>
            <input type='password' id='senha' placeholder='*********' {...register("senha", { required: true }, {maxLength: 32})} />
            <input type="checkbox" id="mostrar" onClick={() => mostrarSenha('senha')}></input>
            <label for="mostrar" className='mostrar'><img src={olhoIcon} /></label>
          </section>
        </InputLogin>

        <BotaoEntrar type='submit'>Entrar</BotaoEntrar>
      </FormLogin>

      <LinkCadastro href=''>Esqueceu a senha?<span> clique aqui para trocar</span></LinkCadastro>
    </BodyLogin>
  )
}

export default Login
