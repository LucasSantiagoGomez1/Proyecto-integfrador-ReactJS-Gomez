import { useCart } from "../../Context/CartContext"
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../Service/firebase/FirebaseConfig"
import { useState } from "react"
import { useNotification } from "../../Notification/NotificationService"
import { useNavigate } from "react-router-dom"

const Checkout = () =>{

    const [ orderId, setOrderId] = useState()
    const [ loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useCart()

    const {setNotification} = useNotification

    const navigate = useNavigate()

    const createOrder = async (userData) => {
        try{
            setLoading(true)
            const objOrder = {
                //buyer: useData
                buyer: {
                    name: "Lucas Gomez",
                    phone: "12345678",
                    email: "emailcontacto@gmail.com"
                },
                items: cart,
                total
            }
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = query(collection(db, "products"), where(documentId(), "in", ids))
    
            const { docs } = await getDocs(productsRef)
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock    
                
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0){
                batch.commit()
    
                const ordersRef = collection(db, "orders")
    
                const orderAdded = addDoc(ordersRef, objOrder)

                clearCart()
                setOrderId((await orderAdded).id)

                setTimeout(() =>{
                    navigate("/")
                },5000)
            }else{
                setNotification("error", "Hay productos que no tienen stock", 5)
            }
        } catch(error){
            setNotification("error", "Hubo un error generando la orden", 5)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return(
            <div>
                <h1>Se esta Generando su Orden...</h1>
            </div>
        )
    }

    if(orderId){
        return(
            <div>
                <h1>El id de su compra es: {orderId}</h1>
            </div>
        )
    }

    return(
        <div>
            <h1>Checkout</h1>
            <h2>Ingrese sus datos</h2>
            {/* <Form onConfirm={createOrder}/> */}
            <button onClick={createOrder}>Crear Orden</button>
        </div>
    )
}

export default Checkout