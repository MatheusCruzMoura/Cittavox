import Body from '../components/body/CriarReclamacao'
import MenuTop from '../components/menus/MenuTF/MenuTop'
import MapaCRft from '../assets/mapaCR.svg'

import MapaCR from '../components/imagens/MapaCR'
import Roboto1Rec from '../components/titulos/Roboto1/CriarReclamacao'
import Dados from '../components/body/CriarReclamacao/dados'


function CriarReclamacao() {

{/* 

import { useHitory } from 'react-router-dom'
import ProjectReclamacoes from '../components/Project/ProjectReclamacoes'

  const hitory = useHitory()

  function creatPost(project) {

    project.cost = 0
    project.services = []

      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
        },
        body: json.Stringify(project)
      })
        .then((resp) => resp.json())
        .then((data) => { console.log(data)})
        .catch((err) => console.log(err))
  }
*/}
  

  return (
    <Body>
      <MenuTop pagina="Criar reclamação" />

      <MapaCR /><img src={MapaCRft} />

      {/* <ProjectReclamacoes criar={creatPost} btnText="Criar reclamacao"/> */}

      <Dados>

        <Roboto1Rec>Localização</Roboto1Rec>
        <Roboto1Rec><input type="text" id='Localização' placeholder="" /></Roboto1Rec>

        <Roboto1Rec>Órgão Público (Empresa)</Roboto1Rec>
        <Roboto1Rec><input type="text" id='orgao' placeholder="" /></Roboto1Rec>

        <Roboto1Rec>Descrição do problema</Roboto1Rec>
        <Roboto1Rec><input type="text" id='descricao' placeholder="" /></Roboto1Rec>

        <Roboto1Rec>Enviar Imagem</Roboto1Rec>
        <Roboto1Rec>
          <div className='Enviarimagem'>
            <label for="img">Adicionar foto do problema</label>
            <input type="file" id="img" accept="image/*" />
          </div>
        </Roboto1Rec>

      </Dados>

      <a href='/reclamacao-enviada'><button>Enviar</button></a>
    </Body>
  )
}

export default CriarReclamacao
