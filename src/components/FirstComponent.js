import AnotherComponent from "./AnotherComponent"

function FirstComponent() {

    const name = "Hugo"

    return(
        <div className='firstcomponent'>{/*diferente do html que é 'class'*/}
            <p>Primeiro Componente</p>
            <label htmlFor='button'></label> {/*diferente do html que é 'for' */} 
            <input type='text' name='button'></input><br></br> 
            {2+2}
            <p>Nome: {name}</p>
        </div>
    )
}

export default FirstComponent