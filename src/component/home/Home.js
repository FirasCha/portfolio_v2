import React from 'react'
import avatar from '../../assets/logo.png'
import './home.css'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Home = () => {
  return (
    <section className='image__section'>
        <Swiper className='img__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <div className='client__avatar'>
            <SwiperSlide><img src={avatar} alt='Avatar One'/></SwiperSlide>
            <SwiperSlide><img  src={avatar} alt='Avatar One'/></SwiperSlide>
        </div>
        </Swiper>
    </section>
  )
}

export default Home