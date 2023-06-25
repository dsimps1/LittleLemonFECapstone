import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
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
            <CustomLink to="">Home</CustomLink>
            <a href="/#about" >About</a>
            <CustomLink to="menu">Menu</CustomLink>
            <CustomLink to="reservation">Reservation</CustomLink>
            <CustomLink to="order">Order Online</CustomLink>
            <CustomLink to="login">Login</CustomLink>
          </nav>
        </div>
      </section>
    )
  }

  // Use the function below to the set the current nav link to active. This is used to format the nav link for the current page.
  function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
      <li className={ isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

  export default Nav