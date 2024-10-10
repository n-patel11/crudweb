import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './dependency/Layout';
import Getall from './dependency/Getall';
import Incert from './dependency/Incert';
import Update from './dependency/Update';
import Home from './dependency/Home';
import Getbyid from './dependency/Getbyid';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={ <Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='/Medicalstore' element={<Getall/>}/> 
    <Route path='/Medicalstore/:id' element={<Getbyid/>} />
    <Route path='/Medicalstore/Incert' element={<Incert/>}/>
    <Route path='/Medicalstore/Update/:id' element={<Update/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
);


reportWebVitals();
