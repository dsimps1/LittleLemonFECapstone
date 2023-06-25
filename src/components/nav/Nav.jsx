import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to="" onClick={() => setActiveNav('')} className={activeNav === '' ? 'active': ''}>Home</Link>
            <a href="/#about" onClick={() => setActiveNav('/#about')} className={activeNav === '/#about' ? 'active': ''}>About</a>
            <a href="menu" onClick={() => setActiveNav('menu')} className={activeNav === 'menu' ? 'active': ''}>Menu</a>
            <Link to="reservation" onClick={() => setActiveNav('reservation')} className={activeNav === 'reservation' ? 'active': ''}>Reservation</Link>
            <Link to="order" onClick={() => setActiveNav('order-online')} className={activeNav === 'order-online' ? 'active': ''}>Order Online</Link>
            <a href="login" onClick={() => setActiveNav('login')} className={activeNav === 'login' ? 'active': ''}>Login</a>
          </nav>
        </div>
      </section>
    )
  }

  export default Nav