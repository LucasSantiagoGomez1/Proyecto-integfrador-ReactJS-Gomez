import "./Navbar.css";
import Imagen from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav>
            <h1>Vestido para impresionar</h1>
            <div class = "Navbar">
                <button> Remeras </button>
                <button> Pantalones </button>
                <button> Calzados </button>
                <Imagen />
            </div>
        </nav>
    )
}
export default Navbar;