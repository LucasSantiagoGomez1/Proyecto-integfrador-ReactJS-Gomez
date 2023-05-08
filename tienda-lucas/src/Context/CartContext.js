import { createContext, useContext, useState } from 'react';

const CartContext = createContext ("valor inicial")

export const CartProvider = ({children}) => {
    const [Cart , setCart]  = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
        setCart(prev => [...prev, productToAdd])
        }else{
        console.log("no se agrega porque ya existe")
    }
  }

    const isInCart = (id) => {
        return Cart.some(prod => prod.id === id)
    }

    const removeItem = (id) =>{
        const updatedCart = Cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0

        Cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    }

    const totalQuantity = getTotalQuantity()

    return(
        <CartContext.Provider value={{Cart, addItem, totalQuantity, removeItem, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () =>{
    return useContext(CartContext)
}