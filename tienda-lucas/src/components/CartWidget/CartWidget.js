import "./CartWidget.css"
import cart from "../img/carrito.png"

const carrito = (prop) => {
    return(
        <div>

           <p class='posicionCarrito'> <img class="carrito" src={cart} /> 0</p>
            
        </div>
    )
}

export default carrito;