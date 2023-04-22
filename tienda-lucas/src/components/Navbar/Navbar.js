import "./Navbar.css";
import Imagen from "../CartWidget/CartWidget"
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link to="/" className="titulo">Vestido para impresionar</Link>
            <div class = "Navbar">
                <Link to="category/Remeras" className="button"> Remeras </Link>
                <Link to="category/Pantalones" className="button"> Pantalones </Link>
                <Link to="category/Calzados" className="button"> Calzados </Link>
                <Imagen />
            </div>
        </nav>
    )
}
export default Navbar;