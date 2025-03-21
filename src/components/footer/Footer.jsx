import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import Logo from '../../assets/logo-portfolio.png'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#top" className='logo'><img className='logo' src={Logo} alt='MAGHRAOUI'/></a>
      <br/>
      <a href="#top" className='footer__logo'>MALEK MAGHRAOUI</a>
        <ul className='permalinks'>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Expeirience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=100010002663814" target='_blank' rel="noreferrer"><FaFacebookF/></a>
          <a href="https://www.instagram.com/malek_maghraoui/" target='_blank' rel="noreferrer"><FiInstagram/></a>
          <a href="https://twitter.com/malek_maghraoui" target='_blank' rel="noreferrer"><IoLogoTwitter/></a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Malek Maghraoui. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer