import {Link} from "react-router-dom"
import "./Item.css"

const Item = ({id, name, img, precio}) => {
    return(
        <div style={{backgroundColor:"aqua"}}>
            <header>
                <h2>{name}</h2>
            </header>
            <img src={img} alt={name} style={{width: 150}}/>
            <p>precio: ${precio}</p>
            <Link to={`/item/${id}`} className="boton"> Ver Detalles </Link>
        </div>
    )
}

export default Item