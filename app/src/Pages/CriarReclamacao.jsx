import Body from '../components/body/CriarReclamacao'
import MenuTop from '../components/menus/MenuTF/MenuTop'
import MapaCRft from '../assets/mapaCR.svg'

import MapaCR from '../components/imagens/MapaCR'



function CriarReclamacao() {

  return (
    <Body>
      <MenuTop pagina="Criar reclamação"/>
      <MapaCR/><img  src={MapaCRft}/><MapaCR />
      <a href='/reclamacao-enviada'><button>Enviar</button></a>  
    </Body>    
  )
}

export default CriarReclamacao
