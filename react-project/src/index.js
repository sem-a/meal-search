import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PageRecipe from './page/PageRecipe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourite from './page/Favourite';
import './js/script.js';
import Page404 from './page/404';
import Error from './page/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/favourite' element={<Favourite />}/>
        <Route path='/recipe/:id' element={<PageRecipe />}/>
        <Route component={<Page404 />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);