/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import './about.css'
// import ME from "../../assets/85840.png";
import ME from "../../assets/malekSidiBou.jpg";
import {FaAward} from '../../../node_modules/react-icons/fa'
import {FiUsers} from '../../../node_modules/react-icons/fi'
import {VscFolderLibrary} from '../../../node_modules/react-icons/vsc'
import axios from 'axios';

const About = () => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const fetchGithubAPI = async () => {
      let res = await axios.get("https://api.github.com/users/malek33/repos")
      setRepos(res.data)
      console.log(res.data)
    }
    fetchGithubAPI()
  }, [])

  return (
    <section id='about'>

      <br></br><br></br>

      <h5 style={{cursor: 'default'}}>Get To Know</h5>
      <h2 style={{cursor: 'default'}}>About Me</h2>

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
              <small>{new Date().getFullYear() - 2019 || 6}+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>5+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>{repos.length || 31}+ Completed</small>
            </article>
          </div>

          <p>
            Experienced Web Developer and UI/UX Designer adept in advanced web
            development stages. Skilled in user interface refinement, testing, debugging, and
            design. Proficient in HTML, CSS, JavaScript, React.js, Node.js, and more.
            Experienced AWS Cloud Captain, event organizer, and participant in 23 hackathons.
            Active member of AJST and JCI Gremda. Proficient in Photoshop and video editing.
            Versatile freelancer with a track record of delivering exceptional results.
          </p>
          <div className='About-btns-container'>
            <a href="#" title='this feature still under development' style={{  cursor: 'not-allowed'}} onClick={() => alert('feature still under development')} className='btn'>More About Me</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About