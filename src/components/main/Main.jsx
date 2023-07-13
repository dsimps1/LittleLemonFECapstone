import React from 'react'
import './main.css'
import GSALAD from '../../assets/greek salad.jpg'
import BRUSHETTA from '../../assets/bruchetta.svg'
import LEMONDES from '../../assets/lemon dessert.jpg'
import BIKE from '../../assets/bike.png'

const Main = () => {
    return (
      <section id="main">
        <div className="container main__container">
          <div className="container__header">
            <h1>This weeks specials!</h1>
            <a href='menu' className='btn btn-primary'>Online Menu</a>
          </div>

          <div className="menu__cards">

            <article className="menu__card">
              <img src={GSALAD} alt="Food on a platter" />
              <div className="card__content">
                <div className="card__header">
                  <h3 className="card__title">Greek Salad</h3>
                  <h3 className="card__price">$12.99</h3>
                </div>
                <p>
                The famous greek salad of crispy lettuce, peppers, 
                olives and our Chicago style feta cheese, garnished 
                with crunchy garlic and rosemary croutons.
                </p>
                <div className="card__footer">
                  <h3 className="footer__text">Order a delivery</h3>
                  <img src={BIKE} alt="delivery icon" />
                </div>
              </div>
            </article>

            <article className="menu__card">
              <img src={BRUSHETTA} alt="Food on a platter" />
              <div className="card__content">
                <div className="card__header">
                  <h3 className="card__title">Bruchetta</h3>
                  <h3 className="card__price">$5.99</h3>
                </div>
                <p>
                Our Bruschetta is made from grilled bread 
                that has been smeared with garlic and seasoned 
                with salt and olive oil. 
                </p>
                <div className="card__footer">
                  <h3 className="footer__text">Order a delivery</h3>
                  <img src={BIKE} alt="delivery icon" />
                </div>
              </div>
            </article>

            <article className="menu__card">
              <img src={LEMONDES} alt="Lemon Dessert" />
              <div className="card__content">
                <div className="card__header">
                  <h3 className="card__title">Lemon Dessert</h3>
                  <h3 className="card__price">$4.99</h3>
                </div>
                <p>
                This comes straight from grandma’s recipe book,
                 every last ingredient has been sourced and is
                  as authentic as can be imagined.
                </p>
                <div className="card__footer">
                  <h3 className="footer__text">Order a delivery</h3>
                  <img src={BIKE} alt="delivery icon" />
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>
    )
  }

  export default Main