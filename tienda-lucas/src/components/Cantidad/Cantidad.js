import "./Cantidad.css"
import { useState } from "react"

const Cantidad = (stock = 0, onAdd) => {

    const [Count, setCount] = useState(1)

    const increment = () => {
        setCount(Count + 1)
    }

    const decrement = () => {
        if(Count > 1){
            setCount(Count - 1)
        }
    }

    return(
    <div  className="div">
            <button className="buttonC" onClick={decrement}>-</button>
            <h4>{Count}</h4>
            <button className="buttonC" onClick={increment}>+</button>
            <button className="buttonC" onClick={() => onAdd(Count)}>Agregar al Carrito</button>
    </div>
    )
}

export default Cantidad