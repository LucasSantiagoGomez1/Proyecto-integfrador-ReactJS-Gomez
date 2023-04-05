import "./CartWidget.css"
import cart from "../img/carrito.png"

const carrito = (prop) => {
    return(
           <p class='colorFondo'> <img class="carrito" src={cart} /> 0</p>
    )
}

export default carrito;