import React from 'react'
import './nav.css'
import {useState} from 'react'
import LOGO from '../../assets/Logo.svg'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
    return (
      <section id="nav">
        <div className="container nav__container">
        <img src={LOGO} alt="Little Lemon Logo" />
          <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active': ''}>Home</a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active': ''}>About</a>
            <a href="#menu" onClick={() => setActiveNav('#menu')} className={activeNav === '#menu' ? 'active': ''}>Menu</a>
            <a href="#reservations" onClick={() => setActiveNav('#reservations')} className={activeNav === '#reservations' ? 'active': ''}>Reservations</a>
            <a href="#order-online" onClick={() => setActiveNav('#order-online')} className={activeNav === '#order-online' ? 'active': ''}>Order Online</a>
            <a href="#Login" onClick={() => setActiveNav('#Login')} className={activeNav === '#order-online' ? 'active': ''}>Login</a>
          </nav>
        </div>
      </section>
    )
  }

  export default Nav