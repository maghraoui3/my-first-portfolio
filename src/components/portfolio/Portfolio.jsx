import React, { useState } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Untitled-4.png'
import IMG2 from '../../assets/Untitled-3.png'
import IMG3 from '../../assets/Untitled-5.png'
import IMG4 from '../../assets/spotunisia.png'
import IMG5 from '../../assets/khamem 9bal mattejbed.png'
import IMG6 from '../../assets/elections.png'
import IMG7 from '../../assets/kitchenSavior.png'
import IMG8 from '../../assets/nftGenerator.png'
import IMG9 from '../../assets/youtubeClone.png'


const data = [
  {
    id: 1,
    image: IMG2,
    title: 'AJST',
    desc: 'AJST front-end website for their event stars night (nuit des etoiles)',
    github: 'https://github.com/Malek33/ASTRO-AJST',
    demo: 'https://astro-ajst.netlify.app'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Tunisian Movies Lovers',
    desc: 'Movie Streaming Website (Totally Free no ads) with modern UI/UX',
    github: 'https://github.com/Malek33/tml',
    demo: 'https://tunisian-movies-lovers.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Social Media App',
    desc: 'FullStack Social media app (MERN App) with tailwind css',
    github: 'https://github.com/Malek33/social-media',
    demo: 'https://tunisian-social-media-app.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Spotunisia',
    desc: 'Download any song you like from spotify using this app',
    github: 'https://github.com/Malek33/Spotunisia',
    demo: 'spotunisia.netlify.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Khamem 9bal Matejbed',
    desc: 'A new game idea based on asking your friends amusing questions.',
    github: 'https://github.com/Malek33/Khamem-9bal-Matejbed',
    demo: 'https://khamem-9bal-matejbed.netlify.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Voti W Ansa',
    desc: "A secure website designed for elections where you can input your own organization and leverage the website's capabilities.",
    github: 'https://github.com/Malek33/voti-w-ansa/',
    demo: null
  },
  {
    id: 7,
    image: IMG7,
    title: 'Food Recipes',
    desc: "A website designed and programmed to give you best recipes based on your ingredients",
    github: null,
    demo: null
  },
  {
    id: 8,
    image: IMG8,
    title: 'NFT Generator',
    desc: "NFT Generator by putting nft components and he will auto generate some random NFT's not duplicated with the rarity nft's feature.",
    github: 'https://github.com/Malek33/nfts-genrator/',
    demo: null
  },
  {
    id: 9,
    image: IMG9,
    title: 'Youtube Clone',
    desc: "YouTube clone, providing users with a platform to upload, view, and share videos.",
    github: null,
    demo: null
  },
]

const Portfolio = () => {
  const [expandProjects, setExpandProjects] = useState(false)
  return (
    <section id='portfolio'>
    <br></br><br></br>
      <h5 style={{cursor: 'default'}}>My Recent Work</h5>
      <h2 style={{cursor: 'default'}}>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.slice(0, expandProjects ? data.length : 6).map(({ id, image, title, github, demo, desc }) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img style={{ height: '220px' }} src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">{demo ? "Live Demo" : "Still working on it.."}</a>
                </div>
              </article>
            )
          })
        }
      </div>
        <div style={{ display: 'flex', justifyContent: "center", marginTop: '50px' }}>
          <p onClick={() => setExpandProjects(!expandProjects)} className='btn btn-primary' target='_blank' rel="noreferrer">{!expandProjects ? "Load More Projects" : "Show Less Projects"}</p>
        </div>
    </section>
  )
}

export default Portfolio