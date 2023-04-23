import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { createContext, useState } from 'react';

export const Context = createContext ("valor inicial")

function App () {

  const [Cart , setCart]  = useState([])

  return (
    <div className="App">
      <Context.Provider value={{Cart, setCart}}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Nuestros Productos"}/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos filtrados por categoria"}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<h1>Cart</h1>}/>
          <Route path='/checkout' element={<h1>Checkout</h1>}/>
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
