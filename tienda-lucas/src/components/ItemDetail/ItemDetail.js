import "./ItemDetail.css"
import Cantidad from "../Cantidad/Cantidad"
import { useContext } from "react"
import { Context } from "../../App"

const ItemDetail = ({id, name, img, description, price, stock}) => {

    const handleOnAdd = (Count) => {
        const productToAdd = {
            id, name, price, Count
        }
        console.log(productToAdd)
    }

    return(
        <div style={{backgroundColor:"aqua", borderRadius: 10}}>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{width: 150}}/>
            <p> stock: {stock}</p>
            <p> {description}</p>
            <p>precio: ${price}</p>
            <Cantidad onAdd={handleOnAdd} stock={stock}/>
        </div>
    )
}

export default ItemDetail