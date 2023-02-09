import './App.css';
import PageContainer from './components/PageContainer';
import {Routes, Link, Route} from "react-router-dom"
import ProductsList from './components/ProductsList';
import Basket from './components/Basket';

function App() {
  return (
    <PageContainer>
      <Routes>
        <Route exact path="/" element={<ProductsList/>}/>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </PageContainer>
  );
}

export default App;
