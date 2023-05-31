
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import Form from './Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Centernav from './Centernav';
import City from './City';
import Miles from './Miles';
import Curated from './curated';
import Summerspice from './Summerspice';
import Map from './Map';
import Questions from './Questions';
import Footer from './Footer';
import Price from './Price';
import { Route, Router, Routes, UNSAFE_DataRouterStateContext } from 'react-router-dom';
import Frequently from './Frequently';

import Newpage from './Newpage';
import Login from './Login';




function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Form/>
    <Centernav/>
    <City/>
    <Miles/>
    <Curated/>
    <Summerspice/>
    <Map/>
    <Frequently/>
    <Questions/>
    <Price/>
    <Footer/>
  

    
  
    </>
   
  );
}

export default App;
