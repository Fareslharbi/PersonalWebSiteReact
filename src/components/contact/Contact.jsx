import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiTwitter} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8eu9kns', 'template_yun7l23', form.current, '-FbmD_D2NsGuPjKmD')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>RealFaresLharbi@gmail.com</h5>
            <a target="_blank"rel="noopener noreferrer" href="mailto:RealFaresLharbi@gmail.com">Send A Message</a>
          </article>

          <article className='contact__option'>
            <FiTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>FaresLharbi</h5>
            <a target="_blank"rel="noopener noreferrer" href="https://twitter.com/FaresLharbi">Send A Message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+966560748481</h5>
            <a target="_blank"rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone00966560748481">Send A Message</a>
          </article>
        </div>
        {/*End of Contact Options*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'required/>
          <input type="text" placeholder='Your Email' name='email' required />
          <textarea name="message" rows="7" placeholder='Your Mesaage' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Mesaage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact