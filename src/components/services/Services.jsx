import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/*Start of Web development*/}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Adding multimedia features like sound, animation and video if applicable
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Ensuring the site is responsive, to render properly on all devices
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Testing and improving the functionality and rendering of the site
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Uploading the site to a designated server
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Excellent problem-solving skills, Strong communication skills.
              </p>
            </li>   
                    
          </ul>
        </article>
        {/*End of Web development*/}

        {/*Start of artificial intelligence*/}
        <article className='service'>
          <div className="service__head">
            <h3>Artificial Intelligence</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              knowledgeable in mathematics and algorithms.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Proficient in various programming languages.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Good Understanding of data structures.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                Good Understanding of neural networks.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              knowledgeable in various signal processing techniques.
              </p>
            </li>   
                    
          </ul>
        </article>
        {/*End of UI/UX*/}
        
        {/*Start of Content Creation*/}
        <article className='service'>
          <div className="service__head">
            <h3>Embedded Systems Development</h3>
          </div>

          <ul className='service__list'>
            
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              knowledge to integrate the hardware and software in an embedded system.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              understanding of programming languages, device drivers, and real-time operating systems.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Basic understanding of Internet of Things (IoT) and internet-based technologies
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Microcontrollers programming, Assembly programming language.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              Ability to read a schematic
              </p>
            </li>           
          </ul>
        </article>
        {/*End of Content Creation*/}
      </div>
    </section>
  )
}

export default Services