import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Main from './page/Main'
import Outerwear from './page/Outerwear'
import WomenTop from './page/WomenTop'
import MenTop from './page/MenTop'
import Dress from './page/Dress'
import Bottoms from './page/Bottoms'
import Shoes from './page/Shoes'
import Underwear from './page/Underwear'
import Accessories from './page/Acessories'
import Bag from './page/Bag'
import Jacket from './page/Jacket'
import Notice from './page/Notice'
import { TabProvider } from './context/TabContext';

function App() {
  return (
    <TabProvider>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/outerwear" element={<Outerwear />} />
          <Route path="/womentop" element={<WomenTop />} />
          <Route path="/mentop" element={<MenTop />} />
          <Route path="/dress" element={<Dress />} />
          <Route path="/bottoms" element={<Bottoms />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/underwear" element={<Underwear />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/jacket" element={<Jacket />} />
          <Route path="/notice" element={<Notice/>}></Route>
        </Routes>
      </div>
    </TabProvider>
  );
}

export default App;
