import { useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../Service/firebase/FirebaseConfig"

const ItemDetailContainer = () =>{

    const [products,setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const{ itemId } = useParams();

    useEffect(() => {
        setLoading(true)

        const productRef = doc(db, "products", itemId) 

        getDoc(productRef)
            .then(snapshot =>{
                const data = snapshot.data()
                const productAdapted = {id: snapshot.id, ...data}
                setProducts(productAdapted)
            }).catch(error => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
        
    }, [itemId])

    if(loading) {
        return (
            <div>
                <h1>Cargando...</h1>
            </div>
        )
    }

    return(

        <div style={{display: "flex", justifyContent: "space-evenly", margin: 30}}>
            <ItemDetail {...products}/>
        </div>
    )
}

export default ItemDetailContainer;