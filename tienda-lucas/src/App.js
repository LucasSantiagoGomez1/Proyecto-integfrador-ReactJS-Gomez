import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { CartProvider } from './Context/CartContext';
import { NotificationProvider } from './Notification/NotificationService';


function App () {
  return (
    <div className="App">
      <BrowserRouter>
          <NotificationProvider>
            <CartProvider>
              <Navbar/>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={"Nuestros Productos"}/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Productos filtrados por categoria"}/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='/cart' element={<h1>Cart</h1>}/>
                <Route path='/checkout' element={<h1>Checkout</h1>}/>
              </Routes>
            </CartProvider>
          </NotificationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
