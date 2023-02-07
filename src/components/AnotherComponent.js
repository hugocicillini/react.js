const HandleClick = () =>{
    console.log("Você clicou no botão")
}
    

const AnotherComponent = () => {
    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={HandleClick}>Evento de Click</button>
            <hr></hr>
            <button onClick={()=> console.log("Você clicou no botao 2")}>Evento de Click</button>
        </div>
    )
}
export default AnotherComponent