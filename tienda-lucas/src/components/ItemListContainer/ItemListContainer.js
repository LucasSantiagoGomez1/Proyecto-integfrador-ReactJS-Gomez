import { useEffect, useState } from 'react'
import { getProducts, getProductByCategory } from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {

    const[products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    
    
    if(loading) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    return(
        
        <div>
            <h1> {greeting} </h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;