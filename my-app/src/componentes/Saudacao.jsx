import React from "react";
function Saudacao (){
    const [nome, setNome] = React.useState("");
    function mostrarSaudacao(evento) {
        setNome(evento.target.value);
    }
    function exibirSaudacao() {
        alert(`Olá ${nome}! Bem-vindo ao curso de React!`);
    }
    return(
        <>
        <h2>Saudação</h2>
        <p>Digite seu nome:</p>
        <input type="text" onChange={mostrarSaudacao} />
        <button onClick={exibirSaudacao}>Exibir Saudação</button>
        </>
    )     
}
export default Saudacao