import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            {products.map(product => <Item key={product.id} name={product.name} img={product.img} precio={product.precio} descripcion={product.descripcion}/>)}
        </div>
    )
}

export default ItemList