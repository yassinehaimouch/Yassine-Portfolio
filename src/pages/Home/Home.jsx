import React from 'react'
import './home.css';
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import HeroImage from '../../assets/hero.png';
import Counter from '../../components/Counter/Counter';
import Line from '../../components/Line/Line';


const Home = () => {

  return (
    <div className="home">
      <Navbar />
      <img src={HeroImage} alt="img" className="heroimage"/>
      <Line />
      <Counter value="00"/>
      <div className='hero-container'>
        <h3>I'M</h3>
        <h1>YASSINE</h1>
        <h2>Frontend Developer</h2>
      </div>
      <Footer />
    </div>
  )
}

export default Home