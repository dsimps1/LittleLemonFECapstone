import React from 'react'
import './header.css'
import HEADIMG from '../../assets/restaurantfood.jpg'

const Header = () => {
    return (
      <header>
        <div className="container header__container">
          <article className="header__content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant,
              focused on traditional recipes served with a
                modern twist.
            </p>
            <a href='#reservations' className='btn btn-primary'>Reserve a Table</a>
          </article>
          <div className="header__photo">
            <img src={HEADIMG} alt="Food on a platter" />
          </div>
        </div>
      </header>
    )
  }

  export default Header