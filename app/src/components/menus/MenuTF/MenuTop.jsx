import Navbar from './Navbar2'
import voltarUrl from '../../../assets/icons/back.svg'
import HeadLine from '../../HeadLine/Inicio'
import Nunito2 from '../../titulos/Nunito2'

function MenuTop({ pagina }) {

  return (
    <>
      <Navbar>
        <a href='javascript:history.back()'>
            <img  src={voltarUrl} />
        </a>

        <Nunito2>{pagina}</Nunito2>
      </Navbar>

      <HeadLine />
    </>
  )
}

export default MenuTop