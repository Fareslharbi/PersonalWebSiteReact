import React from 'react'
import './about.css'
import ME from '../../assets/IMG_0398 copy.JPG' 
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working While Studying</small>
            </article>
            
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>35+ Completed</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ Worldwide</small>
            </article>
          </div>

          <p>
          A motivated and conscientious job seeker with solid engineering abilities looking for an entry-level career. willing to support the team in achieving organizational objectives. versatile computer engineer proficient in many areas of technology administration, development, and use. willing to develop in accordance with technological advancements and market demands. committed to preserving the highest operational efficiencies and uptimes through responsible financial management and strong technological expertise.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About