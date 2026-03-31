import { useState } from "react"
function FormularioObjeto() {
    const [form, setForm] = useState({
    tituloLivro: '',
    autor: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  }
    function handleSubmit(event) {
        event.preventDefault();
        alert(`Livro: ${form.tituloLivro}, Autor: ${form.autor}`);
    }
    return(
      <form>
          <div>
            <h2>Digite o título do livro: {form.tituloLivro}</h2>
            <input name="tituloLivro" value={form.tituloLivro} onChange={handleChange} />
            <h2>Digite o autor do livro: {form.autor}</h2>
            <input name="autor" value={form.autor} onChange={handleChange} />
            <br></br>
            <button onClick={handleSubmit}>Enviar</button>
        </div>
      </form>
    )
}
export default FormularioObjeto