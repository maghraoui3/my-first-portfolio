import React from 'react'
import './about.css'
import ME from "../../assets/85840.png";
import {FaAward} from '../../../node_modules/react-icons/fa'
import {FiUsers} from '../../../node_modules/react-icons/fi'
import {VscFolderLibrary} from '../../../node_modules/react-icons/vsc'

const About = () => {
  return (
    <section id='about'>

      <br></br><br></br>

      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='Me_in_image' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
          “I'm an experienced Web FullStack Developer who constantly seeks out innovative solutions to everyday problems. In my seven years in this industry,
           I've honed my analytical thinking and collaboration skills, and I love working with a team. I've also had the opportunity to serve as the
           FullStack Developer lead for three projects with First Technology.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About