import './App.css';
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Main from './components/main/Main'
import Testimonials from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Nav/>
      <Header />
      <Main />
      <Testimonials/>
      <About/>
      <Footer />
    </>
  );
}

export default App;
