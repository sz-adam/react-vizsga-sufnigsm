import { BrowserRouter as Router } from "react-router-dom"
import { useState, useContext } from 'react';
import './App.css';
import { ProductsContext, ProductsContextDefaults } from "./context/ProductsContext"
import Header from "./components/Header";
import Products from "./pages/Products"
import Calculation from "./pages/Calculation"
import Content from './components/Content'
import { CurrencyContext, CurrencyContextDefaults } from "./context/CurrencyContext";
import Footer from "./components/Footer"
import 'boxicons'
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home"

function App() {
  const [currency, setCurrency] = useState(CurrencyContextDefaults.value);
  const [products, setProducts] = useState(ProductsContextDefaults.value)
  
  const pages = [
    { name: 'Kezdőlap', path: '/', menubar: true, element: <Home />, icon: 'home' },
    { name: "Termékek", path: '/products', menubar: true, element: <Products />, icon: 'mobile' },
    { name: "Kalkuláció", path: '/calculation', menubar: true, element: <Calculation />, icon: 'calculator' },
    { name: "NotFound", path: '*', menubar: false, element: <PageNotFound />, icon: null },
  ]
  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      <ProductsContext.Provider value={{ products, setProducts }} >
        <div className="App">
          <Router>
            <Header menu={pages} />
            <Content routes={pages} />
            <Footer />

          </Router>

        </div>
      </ProductsContext.Provider>
    </CurrencyContext.Provider>

  );
}

export default App;
