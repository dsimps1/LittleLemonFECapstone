import React from 'react'
import './nav.css'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
    return (
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}>Home</a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}>About</a>
        <a href="#menu" onClick={() => setActiveNav('#menu')} className={activeNav === '#menu' ? 'active': ''}>Menu</a>
        <a href="#reservations" onClick={() => setActiveNav('#reservations')} className={activeNav === '#reservations' ? 'active': ''}>Reservations</a>
        <a href="#order-online" onClick={() => setActiveNav('#order-online')} className={activeNav === '#order-online' ? 'active': ''}>Order Online</a>
      </nav>
    )
  }

  export default Nav