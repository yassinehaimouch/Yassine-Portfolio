import React from 'react';
import Star from '../../assets/Star 1.png'
import openIcon from '../../assets/open-icon.png';
import closeIcon from '../../assets/close.png'
import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    setIsClicked(!isClicked);
  }

  return (
    <nav className='nav-container'>
      <Link to="/"><img src={Star} alt="logo" className='logo'/></Link>
      {!isClicked && <img src={openIcon} alt="icon" onClick={clickHandler} className="openIcon"/>}
      {isClicked && <img src={closeIcon} alt="icon" onClick={clickHandler} className="closeIcon"/>}
      <ul className='list-container' style={{display: isClicked ? "block" : "none"}}>
        <li className='about'><Link to="/about">01- About Me</Link></li>
        <li className='projects'><Link to="/projects">02- Projects</Link></li>
        <li className='contact'><Link to="/contact">03- Contact</Link></li>
        <li className='resume'><a href="/">04- Resume</a></li>
      </ul>
    </nav>
  )
}

export default Navbar