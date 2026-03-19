import React from "react";
function ContadorInterativo() {
    const [contador, setContador] = React.useState(0);
    
    function incrementar() {
        setContador(contador + 1);
    }
    function desencrementar() {
        setContador(contador - 1);
    }

return(
    <>
    <h2>Contador Interativo</h2>
    <p>Contador: {contador}</p>
    <button onClick={incrementar}>Incrementar</button>
    <button onClick={desencrementar}>Decrementar</button>
    </>   
)
}
export default ContadorInterativo