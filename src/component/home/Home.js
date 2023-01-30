import React from 'react'
import avatar from '../../assets/logo1.png'
import './home.css'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Quotes } from '../quotes/Quotes';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";
import Particle from "../../Particle";
import Type from './Type';
import Home2 from './Home2';

const Home = () => {
  return (
    <div>
      {/* <section className='image__section'>
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
      </section> */}
      <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SOUMYAJIT BEHERA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2/>
      <Quotes/>
    </section>
    </div>
    
  )
}

export default Home