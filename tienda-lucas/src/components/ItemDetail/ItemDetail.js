const ItemDetail = ({products}) => {
    return(
        <div style={{backgroundColor:"aqua"}}>
            <h2>{products.name}</h2>
            <img src={products.img} alt={products.name} style={{width: 150}}/>
            <p> stock: {products.stock}</p>
            <p> {products.descripcion}</p>
            <p>precio: ${products.precio}</p>
        </div>
    )
}

export default ItemDetail