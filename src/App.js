import './App.css';
import PageContainer from './components/PageContainer';
import {Routes, Link, Route} from "react-router-dom"
import ProductsList from './components/ProductsList';
import Basket from './components/Basket';
import { useState } from 'react';
import BasketContext from './utils/basketContext';

function App() {
  const [basket, setBasket] = useState([])
  return (
    <BasketContext.Provider value={{basket, setBasket, name: "Ben"}}>
      <PageContainer basket={basket}>
        <Routes>
          <Route exact path="/" element={<ProductsList/>}/>
          <Route path="/basket" element={<Basket/>}/>
        </Routes>
      </PageContainer>
    </BasketContext.Provider>
  );
}

export default App;
