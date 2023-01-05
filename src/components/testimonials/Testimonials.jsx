import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/IMG_0539_150x150.jpeg'
import AVTR2 from '../../assets/Screenshot_2022-11-12_at_2.11.50_AM_150x150.png'
import AVTR3 from '../../assets/IMG_0499_150x150.jpeg'
import AVTR4 from '../../assets/IMG_0499_2_150x150.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'




const data = [
  {
   avatar: AVTR1,
   name: 'Wael Alhaidary',
   review: "I was in charge of reviewing him due to my role as project manager for his graduation project, which was about facial recognition technology, and I'm pleased to say that he lived up to my expectations as a committed student with good work ethics and excellent problem-solving skills."
  },
  {
    avatar: AVTR2,
    name: 'Mohamed Flatah',
    review: 'Faris approached me with a business proposal to increase the efficiency of our gym facilities, and his creation of a login system for customers and staff members was a wonderful idea that helped our club save time and money.'
  },
  {
    avatar: AVTR3,
    name: 'Mohamed Orabi',
    review: 'A smart home system that uses the Internet of Things and encryption for the networks of the smart house was the subject of a project that Fares and his colleagues presented while I was the departments head of networks engineering.'
  },
  {
    avatar: AVTR4,
    name: 'Mohamed Alasali',
    review: 'A fantastic project that builds a processor from zero and can execute arithmetic calculations has been submitted by Fares and his colleagues.'
  }

  ]
const Testimonials = () => {
  return (
    <section id='testmonials'>
      <h5>Review From Clients</h5>
      <h2>Testmonials</h2>

      <Swiper className="container testmonials__container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testmonial'>
                <div className="client__avatar">
                  <img src={avatar} alt=""/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials