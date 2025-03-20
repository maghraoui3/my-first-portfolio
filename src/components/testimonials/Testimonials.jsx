import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './testimonials.css'
import AVTR1 from '../../assets/clients/CLIENT2.png'
import AVTR2 from '../../assets/clients/CLIENT1.png'
import AVTR3 from '../../assets/clients/CLIENT4.png'
// import AVTR4 from '../../assets/clients/CLIENT3.png'
import AVTR5 from '../../assets/clients/CLIENT5.png'
import AVTR6 from '../../assets/clients/CLIENT6.png'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: 'Anonymous',
    role: 'Small Business Owner',
    review: 'Hiring Malek as a freelance Full-Stack JavaScript developer was the best decision for our small business. Their expertise in both front-end and back-end development brought our website to life. worked diligently, communicated effectively, and delivered results that exceeded our expectations. I highly recommend for any freelance JavaScript projects.'
  },
  {
    avatar: AVTR2,
    name: 'Emily Carter',
    role: 'Startup Founder',
    review: "Malek proved to be an exceptional freelance Full-Stack JavaScript developer for our startup. Their ability to seamlessly transition between front-end and back-end tasks ensured a smooth development process. What impressed us the most was their commitment to meeting deadlines without compromising code quality. Working with was a pleasure, and we'll definitely collaborate again."
  },
  {
    avatar: AVTR5,
    name: 'Alex Turner',
    role: 'Digital Marketing Consultant',
    review: "As a freelance Full-Stack JavaScript developer, Malek brought a unique blend of technical skills and creativity to our web project. They took the time to understand our specific needs and delivered a solution that not only met but exceeded our expectations. Malek is reliable, responsive, and a true professional. I highly recommend their freelance services."
  },
  {
    avatar: AVTR3,
    name: 'Karen Martinez',
    role: 'E-commerce Entrepreneur',
    review: "Malek was instrumental in building our e-commerce platform. As a freelance Full-Stack JavaScript developer, they demonstrated a deep understanding of the tech stack and delivered a website that is both visually appealing and functionally robust. Malek was flexible, easy to work with, and consistently provided updates throughout the project. I'm thrilled with the results!",
  },
  {
    avatar: AVTR6,
    name: 'James Anderson',
    role: 'Content Creator',
    review: "Working with Malek on my personal website was a fantastic experience. As a freelance Full-Stack JavaScript developer, they not only implemented the technical features I needed but also offered valuable suggestions to enhance the user experience. Malek is a reliable and talented professional who goes above and beyond to deliver top-notch results. Highly recommended!",
  },
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <br></br><br></br>
      <h5 style={{cursor: 'default'}}>Review from clients</h5>
      <h2 style={{cursor: 'default'}}>Testimonials</h2>
      <div>
      <Swiper slidesPerView={1}
            spaceBetween={40}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper container testimonials__container">
       {
        data.map(({ avatar, name, review }, index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
              <img src={avatar} alt={avatar + "'s face"} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small  small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
       }
      </Swiper>
      </div>
    </section>
  )
}

export default Testimonials