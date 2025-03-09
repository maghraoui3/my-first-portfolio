import React from 'react'
import {BsLinkedin} from '../../../node_modules/react-icons/bs'
import {FaGithub} from '../../../node_modules/react-icons/fa'
import {FiDribbble} from '../../../node_modules/react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/malek-maghraoui-0a97171b4/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/Malek33" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://dribbble.com/malek_3" target='_blank' rel="noreferrer"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials
