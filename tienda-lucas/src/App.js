import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from "./components/Cart/Cart"
import Checkout from './components/Checkout/Checkout';
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
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
              </Routes>
            </CartProvider>
          </NotificationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
