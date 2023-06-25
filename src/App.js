import './App.css';
import React from 'react'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import Reservation from './components/reservation/Reservation'
import Order from './components/order/Order'
import Menu from './components/menu/Menu'
import Login from './components/login/Login'
import Footer from './components/footer/Footer'
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/reservation" element={<Reservation />}/>
          <Route path="/order" element={<Order />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>

    </div>
  );
}

export default App;
