import './App.css'
import Titulo from './componentes/Titulo'
import Aluno from './componentes/Aluno'
import Botao from './componentes/Botao'
import Mensagem from './componentes/Mensagem'
import CampoNome from './componentes/CampoNome'
import ContadorInterativo from './componentes/ContadorInterativo'
import Saudacao from './componentes/Saudacao'
import CadastroSimples from './componentes/CadastroSimples'
import ListaNomes from './componentes/ListaNomes'
import FormularioSimples from './componentes/FormularioSimples'
import FormularioObjeto from './componentes/FormularioObjeto'


function App() {
  function mostrarMensagem() {
    alert("Bem-vindo ao seu primeiro React!")
  }

  function botaoSaudacao() {
    alert("Bem vindo ao curso de React!")
  }

  return (
    <div>
      {/* <FormularioSimples /> */}
      <FormularioObjeto />
    </div>
  )
}

export default App
