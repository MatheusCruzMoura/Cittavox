import { useState } from 'react'

import MenuTop from '../components/menus/MenuTF/MenuTop'
import MenuFooter from '../components/menus/MenuTF/MenuFooter'


function Historico() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MenuTop nome="Historico de Reclamações"/>     
      
      <MenuFooter/>
    </div>
  
  )
}

export default Historico
