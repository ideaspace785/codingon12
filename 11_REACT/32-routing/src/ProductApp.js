import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

import Header from './components/Header';
import { useEffect } from 'react';

function ProductApp() {
  const [products, setProducts]=useState([]);
  const getProducts = async () => {
    const res= await axios.get('https://jsonplaceholder.typicode.com/comments');
    setProducts(res.data.slice(0, 10));
  }
  useEffect(()=>{getProducts()}, []);

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage />} /> 
        <Route path='/products' element={<ProductPage products={products} />} /> 
        <Route path='/products/:productId' element={<ProductDetailPage  products={products}/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ProductApp;
