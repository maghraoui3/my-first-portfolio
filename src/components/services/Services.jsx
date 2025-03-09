import React from 'react'
import './services.css'
import {BiCheck} from '../../../node_modules/react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <br></br><br></br>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
               <BiCheck className='service_list-icon' />
               <p>UI/UX Design for Web And Mobile.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Data Visualization.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Wireframing and Prototyping.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>UX And Accessibility Audit.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Data Driven Design.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>User Research.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Business analysis and consulting.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>UI/UX Design.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Web solution engineering.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Quality assurance.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>digitally transformative website</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>high-performing, feature-packed website</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>user-friendly and fully functional website</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Blog Posts.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Long-form content.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Online guides.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Infographics.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Micrographics.</p>
            </li>
            <li>
               <BiCheck className='service_list-icon' />
               <p>Videos.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}

      </div>
    </section>
  )
}



export default Services


