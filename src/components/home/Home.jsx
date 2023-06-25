import React from 'react'
import Header from '../../components/header/Header'
import About from '../../components/about/About'
import Main from '../../components/main/Main'
import Testimonials from '../../components/testimonials/Testimonials'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Main />
      <Testimonials/>
      <About/>
      <Footer />
    </div>
  );
}

export default Home;