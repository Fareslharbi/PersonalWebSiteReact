import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Screenshot_2022-11-11_at_9.30.01_PM_480x360.png'
import IMG2 from '../../assets/Screenshot_2022-11-11_at_10.08.21_PM_480x360.png'
import IMG3 from '../../assets/Picture1_480x360.jpg'
import IMG4 from '../../assets/Plate-detction_480x360.png'
import IMG5 from '../../assets/portfolio5.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Personal Profolio Website'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Application for Student Attendance Using Face Recognition',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
    
  {
    id: 3,
    image: IMG3,
    title: 'Website for Student Attendance Using Face Recognition ',
    github: 'https://github.com',
    demo: 'https://dribbble.com//12017-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
    
  },

  {
    id: 4,
    image: IMG4,
    title: 'Number Plate Detection for Traffic violation',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Music Controller Web App architecture',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  } 
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, title, image, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'rel="noopener noreferrer" target='_blank'>Github</a>
                  <a href={demo} className='btn  btn-primary'rel="noopener noreferrer" target='_blank'>Live Demo</a>
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