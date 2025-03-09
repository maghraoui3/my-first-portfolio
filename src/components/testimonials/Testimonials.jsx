import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import './testimonials.css'
import AVTR1 from '../../assets/malekpic.jpg'
import AVTR2 from '../../assets/brhnpic.jpg'
import AVTR3 from '../../assets/omarpic.jpg'
import AVTR4 from '../../assets/youssefpic.jpg'
import AVTR5 from '../../assets/ahmedpic.jpg'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: 'Malek Maghraoui',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVTR2,
    name: 'Borhen Kassraoui',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVTR3,
    name: 'Med Omar Kacem',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVTR4,
    name: 'Youssef Mahjoubi',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVTR5,
    name: 'Ahmed Ghozzi',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem doloresdeserunt explicabo nostrum ducimus quasi.?'
  },
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <br></br><br></br>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
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