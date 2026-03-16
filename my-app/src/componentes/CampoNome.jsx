function CampoNome() {
    function mostrarNome(evento) {
        console.log(evento.target.value)
    }
    return (
        <>
            <p>Digite seu nome:</p>
            <input type="text" onChange={mostrarNome} />
        </>
    )
}
export default CampoNome