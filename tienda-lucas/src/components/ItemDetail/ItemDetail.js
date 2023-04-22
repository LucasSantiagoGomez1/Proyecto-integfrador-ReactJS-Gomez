import {Link} from "react-router-dom"
import "./ItemDetail.css"
import Cantidad from "../Cantidad/Cantidad"

const ItemDetail = ({products}) => {
    return(
        <div style={{backgroundColor:"aqua", borderRadius: 10}}>
            <h2>{products.name}</h2>
            <img src={products.img} alt={products.name} style={{width: 150}}/>
            <p> stock: {products.stock}</p>
            <p> {products.descripcion}</p>
            <p>precio: ${products.precio}</p>
            <Cantidad />
            <Link className="buttonD">Agregar</Link>
        </div>
    )
}

export default ItemDetail