import React from 'react'
import './about.css'
import PHOTO1 from '../../assets/Mario and Adrian A.jpg'
import PHOTO2 from '../../assets/Mario and Adrian b.jpg'

const About = () => {
    return (
      <section id="about">
        <div className="container about__container">
          <article className="about__content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Amet minim mollit non deserunt ullamco est 
              sit aliqua dolor do amet sint. Velit officia 
              consequat duis enim velit mollit. Exercitation 
              veniam consequat sunt nostrud amet.
              Amet minim mollit non deserunt ullamco est sit 
              aliqua dolor do amet sint. Velit officia consequat 
              duis enim velit mollit. 
            </p>
          </article>
          <div className="about__photos">
            <img id="photo1" src={PHOTO1} alt="Photo of owners 1" />
            <img id="photo2" src={PHOTO2} alt="Photo of owners 2" />
          </div>
        </div>
      </section>
    )
  }

  export default About