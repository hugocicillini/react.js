import {useState, useEffect} from "react";

const Hooks = () => {

    const [novaIdade, setNovaIdade] = useState(19)

    const changeNewAge = () => {
        setNovaIdade(20)
    }
    
    useEffect(()=>{
        console.log('esse aqui é puxadoo')
    })

    return(
        <div>
            <p>Idade: {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar Nova Idade</button>
        </div>
    )
}

export default Hooks