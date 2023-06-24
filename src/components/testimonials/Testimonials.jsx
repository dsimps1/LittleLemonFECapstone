import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/me-about.jpg'

const data = [
  {
    avatar: AVTR1,
    tname: 'John Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    avatar: AVTR1,
    tname: 'John Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. '
  },
  {
    avatar: AVTR1,
    tname: 'John Doe',
    review: 'Lorem, ipsum dolorg elit.rum aperiam repudiandae labore atque.'
  },
  {
    avatar: AVTR1,
    tname: 'John Doe',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. bore atque.'
  },
]

const Testimonials = () => {
    return (
      <section id="testimonials">
        <h2>Testimonials</h2>
        <div className="container testimonials__container">
          <div className="testimonial__cards">
            {
              data.map(({avatar, tname, review}, index) => {
                return (
                <article className="testimonial__card">
                  <div className="client__rating">*****</div>
                  <div className='client__avatar'>
                    <img src={avatar} alt='Avatar One'/>
                    <h5 className='client__name'>{tname}</h5>
                  </div>
                  <small className='client__review'>{review}</small>
                </article>
                )
              }
              )
            }

          </div>
        </div>
      </section>
    )
  }

  export default Testimonials