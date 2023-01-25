import React from 'react';
import './footer.css';
import Smile from '../../assets/smile.png'

const Footer = () => {
  return (
    <>
    <footer className='footer-desktop'>
      <a href="/"><img src={Smile} alt="smile-icon" className='smile-icon'/></a>
      <div className='footer-left'>
        <h3>© 2023 Yassine Haimouch 版權所有.</h3>
        <ul>
          <li><a href="/">github</a></li>
          <li><a href="/">linkedin</a></li>
          <li ><a href="/" className='instagram'>instagram</a></li>
        </ul>
      </div>
    </footer>
    <footer className='footer-phone'>
      <h3>© 2023 All Rights Reserved.</h3>
      <a href="/"><img src={Smile} alt="smile-icon" className='smile-icon-phone'/></a>
    </footer>
    </>
    
  )
}

export default Footer;