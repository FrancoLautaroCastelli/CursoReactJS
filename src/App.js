
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className="App">
      
        <NavBar/>
        <Hero/>
        <ItemListContainer/>
        <Footer/>
    </div>
  );
}

export default App;
