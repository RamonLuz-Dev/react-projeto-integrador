//Formulario Simples do exercicio 1 e 2
import { useState } from "react"

function FormularioSimples() {
    const [tituloLivro, setTitulolivro] = useState('');
    const[autor, setAutor] = useState('');

    function enviarFormulario(event) {
        event.preventDefault();
        alert(`Livro: ${tituloLivro}, Autor: ${autor}`);
    }
    
    return(
        <div>
            <h2>Digite o título do livro: {tituloLivro}</h2>
            <input value={tituloLivro} onChange={(event) => setTitulolivro(event.target.value)} />
            <h2>Digite o autor do livro: {autor}</h2>
            <input value={autor} onChange={(event) => setAutor(event.target.value)} />
            <br></br>
            <button onClick={enviarFormulario}>Enviar</button>
        </div>
    )
}
export default FormularioSimples