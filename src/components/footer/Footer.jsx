import React from 'react'
import './footer.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import FOOTERIMG from '../../assets/restaurant chef B.jpg'

const Footer = () => {
    return (
      <section id="footer">
        <div className='container footer__container'>
          <div className="footer__photo">
            <img src={FOOTERIMG} alt="Photo of Chef" />
          </div>

          <div className='footer__permalinks'>
          <h3>Doormat Navigation</h3>
            <nav>
              <ul>
              <li><Link to="">Home</Link></li>
              <li><a href="/#about" >About</a></li>
              <li><Link to="menu">Menu</Link></li>
              <li><Link to="reservation">Reservation</Link></li>
              <li><Link to="order">Order Online</Link></li>
              <li><Link to="login">Login</Link></li>
              </ul>
            </nav>
          </div>

          <div className='footer__contact'>
            <h3>Contact</h3>
            <ul>
              <li>12345 Lemon Ave</li>
              <li>SomeCity, ST 67890</li>
              <li>(000) 123-3456</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>

          <div className="footer__socials">
            <h3>Social Media Links</h3>
            <ul>
              <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
            </ul>

          </div>
        </div>
        <div className='footer__copyright'>
            <p>&copy; 2023  Little Lemon.  All rights reserved.</p>
          </div>
      </section>
    )
  }

  export default Footer