import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/trade-dashboard-for-bitcoin-vector-23925371.png'
import IMG2 from '../../assets/analytics.png'
import IMG3 from '../../assets/3333_4x.jpg'
import IMG4 from '../../assets/4.png'
import IMG5 from '../../assets/5.jpg'
import IMG6 from '../../assets/6.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/Malek33',
    demo: 'https://github.com/Malek33'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/Malek33',
    demo: 'https://github.com/Malek33'
  },
  {
    id: 3,
    image: IMG6,
    title: 'Best Projects in Photoshop and Video Editing',
    github: 'https://github.com/Malek33',
    demo: 'https://github.com/Malek33'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com/Malek33',
    demo: 'https://github.com/Malek33'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/Malek33',
    demo: 'https://github.com/Malek33'
  },
  {
    id: 6,
    image: IMG3,
    title: 'Figma Dashboard UI kit for data design web apps',
    github: 'https://github.com/Malek33',
    demo: 'https://github.com/Malek33'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
    <br></br><br></br>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio