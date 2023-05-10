import "./ItemDetail.css"
import ItemCount from "../Cantidad/ItemCount"
import { useCart } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { useNotification } from "../../Notification/NotificationService"

const ItemDetail = ({id, name, img, descripcion, precio, stock}) => {

    const {addItem, isInCart} = useCart()
    const {setNotification} = useNotification()

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id, name, precio, quantity
        }
        addItem(productToAdd)
        setNotification("success", `Se agregro correctamente ${quantity} ${name}`)
    }

    return(
        <div style={{backgroundColor:"aqua", borderRadius: 10}}>
            <h2>{name}</h2>
            <img src={img} alt={name} style={{width: 150}}/>
            <p> {descripcion}</p>
            <p> stock: {stock}</p>
            <p>precio: ${precio}</p>
            <footer>
                {
                    isInCart(id) ? (
                        <Link to='/cart' className="boton">Terminar compra</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock} />
                    )
                }
            </footer>
        </div>
    )
}

export default ItemDetail