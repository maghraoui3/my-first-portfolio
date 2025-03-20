import React, { useState } from 'react'
import './services.css'
import {BiCheck} from '../../../node_modules/react-icons/bi'


const Services = () => {

   const data = [
      {
         id: 1,
         section: 'UI/UX Design',
         data: [
         {id: 'U0', title: "User Interface (UI) Design", desc: "Crafting visually appealing and intuitive user interfaces that enhance the overall user experience. Focus on creating engaging and responsive designs for web applications, ensuring a seamless interaction with the product."},
         {id: 'U1', title: "User Experience (UX) Design", desc: "Developing user-centered designs that prioritize usability and accessibility. Conducting user research, creating user personas, and designing wireframes and prototypes to optimize the overall flow and functionality of the web application."},
         {id: 'U2', title: "Prototyping", desc: "Creating interactive prototypes to visualize and test user interactions before the development phase. Prototypes serve as a crucial tool for gathering feedback, validating design decisions, and ensuring a smooth transition from concept to the final product."},
         {id: 'U3', title: "Frontend Development", desc: "Bringing design concepts to life by implementing frontend code using HTML, CSS, and JavaScript. Ensuring that the design is translated accurately into a functional and responsive user interface, with attention to detail and cross-browser compatibility."},
         {id: 'U4', title: "Usability Testing", desc: "Conducting usability testing to evaluate the effectiveness and efficiency of the user interface. Collecting feedback from real users to identify areas for improvement and iteratively refining the design to enhance user satisfaction."},
         {id: 'U5', title: "Responsive Design Implementation", desc: "Ensuring that designs are responsive and optimized for various devices and screen sizes. Implementing media queries and other techniques to create a consistent and engaging user experience across desktops, tablets, and mobile devices."},
         ]
      },
      {
         id: 2,
         section: 'Web Development',
         data: [
         {id: 'W0', title: "Fullstack Web Development.", desc: "End-to-end development of web applications, covering both frontend and backend aspects to ensure a cohesive and seamless user experience."},
         {id: 'W1', title: "Responsive Frontend Design.", desc: "Crafting visually appealing and user-friendly interfaces that adapt seamlessly to various devices, ensuring an optimal user experience across desktops, tablets, and mobile devices."},
         {id: 'W2', title: "Backend Development.", desc: "Building robust server-side logic and databases to support the frontend, ensuring efficient data management, security, and overall functionality of the web application."},
         {id: 'W3', title: "Database Management.", desc: "Designing, implementing, and optimizing databases to securely store and retrieve data, whether using relational databases like MySQL or NoSQL databases like MongoDB."},
         {id: 'W4', title: "API Development.", desc: "Creating well-documented and efficient APIs to facilitate communication between frontend and backend components, enabling seamless integration with external services or third-party applications."},
         {id: 'W5', title: "Security Implementation.", desc: "Implementing comprehensive security measures, including encryption, authentication, and secure API integrations, to protect against cyber threats and ensure the confidentiality of sensitive data."},
         {id: 'W6', title: "Performance Optimization.", desc: "Fine-tuning both frontend and backend components to enhance the speed and efficiency of web applications, optimizing code, databases, and server configurations."},
         {id: 'W7', title: "Continuous Integration and Deployment.", desc: "Setting up automated pipelines for testing, building, and deploying applications, ensuring a streamlined and efficient development workflow with rapid and reliable releases."},
         {id: 'W8', title: "Code Review and Quality Assurance.", desc: "Conducting thorough code reviews to identify and rectify issues, ensuring code quality, adherence to best practices, and overall optimization for maintainability."},
         {id: 'W9', title: "Technical Consultation.", desc: "Providing strategic guidance on technology stack selection, architectural decisions, and overall technical direction to align with business goals and ensure long-term success of the project."},
         ]
      },
      {
         id: 3,
         section: 'Content Creation',
         data: [
         {id: 'C0', title: "Blog Posts", desc: "Crafting well-researched and engaging blog posts that cater to a target audience. Creating content that is informative, entertaining, and optimized for search engines to drive traffic and engagement."},
         {id: 'C1', title: "Long-Form Content", desc: "Producing in-depth articles, whitepapers, or reports that delve into complex topics. Providing comprehensive and valuable information to establish authority in a particular niche or industry."},
         {id: 'C2', title: "Online Guides", desc: "Developing detailed and user-friendly online guides that offer step-by-step instructions, advice, and solutions. Ensuring clarity and simplicity in conveying complex information."},
         {id: 'C3', title: "Infographics", desc: "Designing visually appealing infographics to present information in a concise and easy-to-understand format. Utilizing graphic elements to enhance data visualization and engage the audience."},
         {id: 'C4', title: "Micrographics", desc: "Creating bite-sized visual content, such as quick tips, quotes, or statistics, designed for easy consumption on social media platforms. These graphics aim to capture attention and convey information succinctly."},
         {id: 'C4', title: "Videos", desc: "Producing informative and engaging videos for online platforms. This could include tutorial videos, product demonstrations, or storytelling content to connect with the audience visually and audibly."},
         ]
      },]

   const HoveredWindow = () => {
      return(
         <div>
            banjour
         </div>
      )
   }

   const [itemClicked, setItemClicked] = useState(false)

  return (
    <section id='services'>
    <br></br><br></br>
      <h5 style={{cursor: 'default'}}>What I Offer</h5>
      <h2 style={{cursor: 'default'}}>Services</h2>
      <div className="container services_container">
         {data.map(item =>
         <article key={item.id}>
            <div className='service'>
               <div className='service_head'>
                  <h3>{item.section}</h3>
               </div>
               <ul className='service_list'>
               {item.data.map(item =>
                  <li key={item.id} title={item.desc} onClick={() => itemClicked === item.id ? setItemClicked('') : setItemClicked(item.id)}>
                     <BiCheck className='service_list-icon'/>
                     <div>
                     <p style={{ cursor: 'pointer' }}>{item.title}</p>
                     <p style={{ display: itemClicked === item.id ? 'block' : 'none' }} className='service_list-desc'>{item.desc}</p>
                     </div>
                  </li>
                  )}
               </ul>
            </div>
         </article>)}
      </div>
    </section>
  )
}



export default Services


