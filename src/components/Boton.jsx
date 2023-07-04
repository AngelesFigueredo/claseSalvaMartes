import { useState } from 'react';

function Boton(props){
    
    const [color, cambiarColor] = useState("red")

    const changes = () => {
        // color = "blue"
        cambiarColor("blue")
        props.funcionDeCambio(props.correcto)
    }

    return (
        <button onClick={changes} style={{ backgroundColor: color }}>
            {props.children}
        </button>
    )
}

export default Boton