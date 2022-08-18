import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"

import BodyLogin from '../components/body/Login'

import Roboto3 from '../components/titulos/Roboto3'

import FormCadastro from '../components/forms/FormCadastro'
import emailIcon from '../assets/icons/email.svg'
import userIcon from '../assets/icons/user.svg'
import dateIcon from '../assets/icons/date.svg'
import InputLogin from '../components/inputs/InputLogin'
import senhaIcon from '../assets/icons/senha.svg'
import olhoIcon from '../assets/icons/olho.svg'

import BotaoEntrar from '../components/botoes/BotaoEntrar'
import LinkCadastro from '../components/botoes/LinkCadastro'
import MenuTop from '../components/menus/MenuTF/MenuTop'
import api from "../Api";

function mostrarSenha(id) {
  const x = document.getElementById(id);
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


function Cadastro() {
  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm();

  const navigate = useNavigate();

  const onSubmit = data => {
    
    api.post("/usuario", data)
    
    navigate("/login")
    // console.log(data)
    console.log(JSON(data))
  };

  function validarSenha() {
    const senha = document.getElementById("senha")
    const confirmarSenha = document.getElementById("confirmarSenha");
    
    if(senha.value != confirmarSenha.value) {
      confirmarSenha.setCustomValidity("As senhas não são iguais!");
    } else {
      setValue("senha", senha.value);
      confirmarSenha.setCustomValidity('');
    }
  }

  return (
      <BodyLogin>
        <MenuTop pagina="Cadastro"/>


      <Roboto3>Crie sua conta para fazer sua reclamação</Roboto3>

      <FormCadastro onSubmit={handleSubmit(onSubmit)}>
        <InputLogin>
          <img src={userIcon} />
          <section>
            <label for='nome'>Nome completo</label>
            <input id='nome' placeholder='Nome do Usuário' {...register("nome", { required: true })} />
          </section>
        </InputLogin>

        <InputLogin>
          <img src={dateIcon} />
          <section>
            <label for='dataNascimento'>Data de nascimento</label>
            <input type='date' id='dataNascimento' {...register("dataNascimento", { required: true })} />
          </section>
        </InputLogin>

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
            <input type='password' id='senha'  placeholder='*********' onChange={validarSenha} />
            <input type="checkbox" id="mostrar" onClick={() => mostrarSenha('senha')} />
            <label for="mostrar" className='mostrar'><img src={olhoIcon} /></label>
          </section>
        </InputLogin>

        <InputLogin>
          <img src={senhaIcon} />
          <section>
            <label for='confirmarSenha'>Confirme a senha</label>
            <input type='password' id='confirmarSenha' placeholder='*********' onKeyUp={validarSenha} required />
            <input type="checkbox" id="mostrar2" onClick={() => mostrarSenha('confirmarSenha')} />
            <label for="mostrar2" className='mostrar'><img src={olhoIcon} /></label>
          </section>
        </InputLogin>

        <BotaoEntrar type='submit'>Cadastrar</BotaoEntrar>
      </FormCadastro>

      <LinkCadastro href='/login'>Já tem uma conta?<span> clique aqui para entrar</span></LinkCadastro>
    </BodyLogin>
  )
}

export default Cadastro
