import React from 'react';
function ListaNomes() {
    const [nomes, setNomes] = React.useState([]);
    const [novoNome, setNovoNome] = React.useState("");

    function adicionarNome() {
        const nome = novoNome.trim();
        if (!nome) return;
        setNomes((prev) => [...prev, nome]); // spread operator
        setNovoNome('');
    }
    function limparNomes() {
        setNomes([]);
    }
    const nomesExibicao = nomes.join(', '); // Os nomes que serao adcionados eles vao mostra no Nome: com virgula exemplo Ramon, Marcelo
    return (
        <>
            <h2>Lista de Nomes</h2>
            <p>Nome: {nomesExibicao}</p>
            <input type="text" value={novoNome} onChange={(evento) => setNovoNome(evento.target.value)} />
            <button onClick={adicionarNome}>Adicionar Nome</button>
            <button onClick={limparNomes}>Limpar Nomes</button>
            <ul>
                {nomes.map((nome, index) => (
                    <li key={index}>{nome.trim()}</li>
                ))}
            </ul>
        </>
    )
}
export default ListaNomes