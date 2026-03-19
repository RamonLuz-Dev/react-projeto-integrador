import React from 'react';
function ListaNomes() {
  const [nomes, setNomes] = React.useState([]);
  const [novoNome, setNovoNome] = React.useState('');
  function adicionarNome() {
    if (!novoNome.trim()) return; // Verifica se o nome nao e vazio ou apenas espaços
    setNomes((prev) => [...prev, novoNome.trim()]); // spread operator para adicionar o novo nome na lista
    setNovoNome('');
  }

  return (
    <>
      <h2>Lista de Nomes</h2>
      <input
        type="text"
        value={novoNome}
        onChange={(evento) => setNovoNome(evento.target.value)}
      />
      <button onClick={adicionarNome}>Adicionar Nome</button>
    </>
  );
}
export default ListaNomes;