import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/D69AB058-199E-405E-BF04-D0D9B59EC25A 3.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Fares Abdulaziz</h1>
        <h5 className="text-light">Computer & Electrical Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        

        <div className="me">
          <img className='me-img' src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header