import Navbar from '../../head/Navbar'
import BotaoVoltar from '../../botoes/BotaoVoltar'
import Voltar from '../../imagens/Voltar'
import voltarUrl from '../../../assets/icons/back.svg'
import HeadLine from '../../HeadLine/Inicio'
import Nunito2 from '../../titulos/Nunito2'

function MenuTop({pagina}) {

  return (
      <>
      <Navbar>
      <BotaoVoltar as='a' href='javascript:history.back()'>
        <Voltar as='img' src={voltarUrl} />
      </BotaoVoltar>
      <Nunito2>{pagina}</Nunito2>
    </Navbar><HeadLine />
    </>  
  )
}

export default MenuTop
