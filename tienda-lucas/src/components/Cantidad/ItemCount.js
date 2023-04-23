import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({onAdd}) => {

    const [Quantity, setQuantity] = useState(1)

    const increment = () => {
        setQuantity(Quantity + 1)
    }

    const decrement = () => {
        if(Quantity > 1){
            setQuantity(Quantity - 1)
        }
    }

    return(
    <div  className="div">
            <button className="buttonC" onClick={decrement}>-</button>
            <h4>{Quantity}</h4>
            <button className="buttonC" onClick={increment}>+</button>
            <button className="buttonC" onClick={() => onAdd(Quantity)}>Agregar al Carrito</button>
    </div>
    )
}

export default ItemCount