import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CartView from './components/CartView/CartView';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';
// import { exportItemsToFirestore } from './services/firebase';
import { CartContextProvider } from './storage/CartContext';




function App() {
  return (
    <div className="App">     
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={ <ItemListContainer/> } />
            <Route path="/category/:categoryid" element= { <ItemListContainer/> } />
            <Route path="/item/:id" element= { <ItemDetailContainer/> } />
            <Route path="/cart" element= { <CartView/> } />
            <Route path="/checkout/*" element= {<h1> Gracias por realizar la compra</h1> } />

            <Route path="*" element= {<h1>404: Pagina no encontrada</h1> } />
          </Routes>
          <Footer/>
          </BrowserRouter>
      </CartContextProvider>
      {/* <button onClick={exportItemsToFirestore}>Exportar datos</button> */}
    </div>
  );
}

export default App;
