import React from 'react'
import Hero from '../components/Navbar/Hero'
import ServicesSection from '../components/ServicesSection'
import Footer from '../components/Footer/Footer'
import BackToUp from '@uiw/react-back-to-top';
import Aviation from '../components/Aviation/Aviation';
import SlickSlider from '../components/slick-slider/SlickSlider';

const Home = () => {
  return (
    <div className='wrapper-div'>
        <Hero/>
        <ServicesSection/>
        <Aviation/>
        <SlickSlider/>
        <Footer/>
        <BackToUp className='mr-14'>
        <ion-icon name="arrow-up-outline"></ion-icon>
        </BackToUp>
    </div>
  )
}

export default Home