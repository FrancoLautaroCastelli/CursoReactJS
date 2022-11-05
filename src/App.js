import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">     
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/category/:categoryid" element= { <ItemListContainer/> } />
          <Route path="/item/:id" element= { <ItemDetailContainer/> } />
        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
