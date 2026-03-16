import './App.css'
import Titulo from './componentes/Titulo'
import Aluno from './componentes/Aluno'
import Botao from './componentes/Botao'
import Mensagem from './componentes/Mensagem'
import CampoNome from './componentes/CampoNome'


function App() {
  function mostrarMensagem() {
    alert("Bem-vindo ao seu primeiro React!")
  }

  function botaoSaudacao() {
    alert("Bem vindo ao curso de React!")
  }

  return (
    <div>
      <h1>Minha primeira aula</h1>
      <Titulo />
      <Mensagem />
      <Aluno />
      <Botao />
      <CampoNome />
      <br></br>
      <button onClick={mostrarMensagem}>Clique aqui</button>
      <button onClick={botaoSaudacao}>Saudação</button>
    </div>
  )
}

export default App
