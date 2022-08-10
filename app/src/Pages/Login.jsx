import BodyLogin from '../components/body/Login'
import Roboto1 from '../components/titulos/Roboto1'
import Roboto2 from '../components/titulos/Roboto2'
import FormLogin from '../components/forms/FormLogin'
import emailIcon from '../assets/icons/email.svg'
import InputLogin from '../components/inputs/InputLogin'
import senhaIcon from '../assets/icons/senha.svg'
import BotaoEntrar from '../components/botoes/BotaoEntrar'
import LinkCadastro from '../components/botoes/LinkCadastro'
import MenuTop from '../components/menus/MenuTF/MenuTop'

function Login() {

  return (
    <BodyLogin>

      <MenuTop pagina="Entrar na conta"/>

      <Roboto1>Bem vindo de volta!</Roboto1>
      <Roboto2>entre na conta para continuar</Roboto2>

      <FormLogin action='/home'>
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

        <BotaoEntrar type='submit'>Entrar</BotaoEntrar>
      </FormLogin>

      <LinkCadastro href=''>Esqueceu a senha?<span> clique aqui para trocar</span></LinkCadastro>
    </BodyLogin>
  )
}

export default Login
