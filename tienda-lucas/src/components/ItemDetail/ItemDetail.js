import "./ItemDetail.css"
import ItemCount from "../Cantidad/ItemCount"
import { useContext } from "react"
import { Context } from "../../App"

const ItemDetail = ({id, name, img, descripcion, precio, stock}) => {

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, precio, quantity
        }
        console.log(productToAdd)
    }

    return(
        <div style={{backgroundColor:"aqua", borderRadius: 10}}>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{width: 150}}/>
            <p> {descripcion}</p>
            <p> stock: {stock}</p>
            <p>precio: ${precio}</p>
            <ItemCount onAdd={handleOnAdd}/>
        </div>
    )
}

export default ItemDetail