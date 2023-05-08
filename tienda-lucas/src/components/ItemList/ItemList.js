import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return(
        <div style={{display: "flex", justifyContent: "space-evenly", flexWrap:"wrap"}}>
            {products.map(product => <Item key={product.id} id={product.id} name={product.name} img={product.img} precio={product.precio}/>)}
        </div>
    )
}

export default ItemList