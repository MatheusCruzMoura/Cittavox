import Body2 from '../components/body/RecEnviada'
import Enviado from '../assets/enviado.svg'
import Roboto22 from '../components/body/RecEnviada/roboto22'


function ReclamacaoEnviada() {

  return (
    <Body2>
        <Roboto22>Reclamação enviada com sucesso </Roboto22>   

        <div><img src={Enviado}></img></div>

        <a href='/home'><button>Voltar ao inicio</button></a>  

    </Body2>
  
  )
}

export default ReclamacaoEnviada
