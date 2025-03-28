import React from 'react'
import './header.css'
import CTA from './CTA';
import Me from '../../assets/Layer3.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 style={{cursor: 'default'}}>Hello i'm</h5>
        <h1 style={{cursor: 'default'}}>Malek Maghraoui</h1>
        <h5 className='text-light' style={{cursor: 'default'}}>FullStack Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={Me} alt='me' />
        </div>

        <a href='#footer' className='scroll__down'>scroll down</a>

      </div>
    </header>
  )
}

export default Header