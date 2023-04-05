import { useEffect, useState} from "react"
import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () =>{

    const[products,setProducts] = useState([])

    useEffect(() => {
        getProductById("1").then(response =>{
            setProducts(response)
        }).catch(error => {
            console.log(error)
        })
        
    }, [])

    return(

        <div style={{display: "flex", justifyContent: "space-evenly", margin: 30}}>
            <ItemDetail products={products}/>
        </div>
    )
}

export default ItemDetailContainer;