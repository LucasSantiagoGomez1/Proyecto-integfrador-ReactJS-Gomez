import { useEffect, useState} from "react"
import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{

    const[products,setProducts] = useState([])

    const{ itemId } = useParams();

    useEffect(() => {
        getProductById(itemId).then(response =>{
            setProducts(response)
        }).catch(error => {
            console.log(error)
        })
        
    }, [itemId])

    return(

        <div style={{display: "flex", justifyContent: "space-evenly", margin: 30}}>
            <ItemDetail products={products}/>
        </div>
    )
}

export default ItemDetailContainer;