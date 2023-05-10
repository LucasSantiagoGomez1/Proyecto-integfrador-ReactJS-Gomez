import "./CartWidget.css"
import cart from "../img/carrito.png"
import { useCart } from "../../Context/CartContext"

const Carrito = () => {

    const {totalQuantity} = useCart()

    return(
        <div className="colorFondo">
             <img src={cart} alt="carro" className="carrito"/>
            {totalQuantity}
        </div>
    );
}

export default Carrito;