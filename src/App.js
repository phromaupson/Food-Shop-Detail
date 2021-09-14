import React from 'react';
import Navbar from './components/navbar/Navbar.js'
import ShopList from './components/ShopList/index.js'
import style from './style.css'

function App() {
  return (
    <div className="container">
      <Navbar/>
      <ShopList/>
    </div>
  );
}

export default App;
