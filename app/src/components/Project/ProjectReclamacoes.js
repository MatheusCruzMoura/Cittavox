{/*

import { useState, useEffect } from 'react'

function ProjectReclamacoes(criar, btnText, projectData) {

  const [reclamacoes, setReclamacoes] = useState([])
  const [project, setProject] = useState(projectData || {})

  useEffect(() => {
    fetch('http://localhost:5000/reclamacoes', {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => { setReclamacoes(data) })
      .catch((err) => console.log(err))
  }, [])

  const submit = (e) => {
    e.preventDefault()
    criar(project)
  }

  function handleCheange() {
    setProject({...project, [e.target.empresa]: e.target.value})
    console.log(project)
  }


  return (
    <form onSubmit={submit}>
      <input empresa="compesa" handleOnCheange={handleCheange} />
      <input empresa="celpe" handleOnCheange={handleCheange} />
      <input empresa="lideri" handleOnCheange={handleCheange} />
    </form>
  )
}

export default ProjectReclamacoes

*/}