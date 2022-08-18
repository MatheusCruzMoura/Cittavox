import BodyHistorico from './index'
import Nunito1 from '../titulos/Nunito1'
import Deletahistorico from '../../assets/deletaHistorico.svg'

function cardRecamacoes({ id, foto, data, empresa }) {

  return (

    <BodyHistorico>
      <img className='fotoReclamacao' src={foto} />
      <div>
        <Nunito1>{empresa}</Nunito1>
        <data>{data}</data>
      </div>

      <img className='lixo' src={Deletahistorico} />
    </BodyHistorico>

  )
}

export default cardRecamacoes
