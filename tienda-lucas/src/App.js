import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ItemLista from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemLista greeting={"Nuestros Productos"}/>
    </div>
  );
}

export default App;
