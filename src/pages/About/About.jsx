import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Counter from '../../components/Counter/Counter';
import Line from '../../components/Line/Line';
import Title from '../../components/Title/Title';
import Star from '../../assets/Star 1.png';
import './about.css';

const About = () => {
  return (
    <>
      <Navbar />
      <Line />
      <Counter value="01"/>
      <Title value="About Me"/>
      <div className='tx-container'>
        <h1>Developer</h1>
        <img src={Star} alt="star" />
        <h1>Creator ( @gitcoder )</h1>
      </div>
      <p className='description'>
        Lorem ipsum dolor sit amet consectetur. Amet nec et gravida cursus feugiat urna commodo risus. Odio faucibus neque vel vitae a leo facilisis. 
      </p>
      <p className='description'></p>
      <Footer />
    </>
  )
}

export default About