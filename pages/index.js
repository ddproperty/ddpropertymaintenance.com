// NextJS
import Head from 'next/head'
import Image from 'next/image'
// React
import { useState, useEffect } from 'react';
// Dependencies
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { FaPhoneAlt } from 'react-icons/fa';
// Utils
import { services } from '../utils/services'
import { testimonials } from '../utils/testimonials';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1850)
  }, []);

  return (
    <>
      <Head>
        <title>D & D Property Maintenance</title>
        <meta name="description" content="D & D Property Maintenance. Lawn care, gutter cleaning, floor remodels, and more! Servicing Connecticut and the greater New London county." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
        <div className="loading-container">
          <Image
            src="/loading.gif" 
            height="100"
            width="100"
          />
        </div>
      ) : (
        <>
          <main className="main">
            <div className="hero-container">
              <Image 
                src="/d&d-main.png"
                height="80"
                width="350"
              />

              <h1 className="title">
                D&D Property Maintenance
              </h1>

              <p className="description">
                Fulfilling all your maintenance needs
              </p>

              <div>
                <p>Scroll</p>
                <div id="scroll-down" className="demo">
                  <div><span></span></div>
                </div>
              </div>
            </div>

            <section className="services-container">
              <h2 className="section-header">Services</h2>
              <div className="services-grid">
                {services.map((service) => (
                  <div className="card" key={service.id}>
                    <div className="services-flex">
                      <service.icon size="30px" />
                      <p>{service.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="testimonials-container">
              <h2 className="section-header">Testimonials</h2>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true
                }}
              >
                {testimonials.map((el) => (
                  <SwiperSlide key={el.id}>
                    <div className="swiper-card">
                      <div className="swiper-feedback">
                        {el.feedback}
                      </div>
                      <div className="swiper-author">
                        {el.author}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            <section className="contact-container">
              <h2 className="section-header">Contact</h2>
              <div className="contact-grid">
                <div>
                  <p className="contact-more-text">{"Additional services provided on request. Give us a call anytime and we'll come give you a FREE ESTIMATE!"}</p>
                </div>
                <div className="contact-flex">
                  <div className="contact-card">
                    <span className="contact-card-name">D & D Property Management</span>
                    <br />
                    <span className="contact-card-phone">
                      <FaPhoneAlt size="16px" style={{marginRight: "0.5rem"}} />
                      860-775-5775
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="footer">
            <span>Copyright 2022 &copy; D&D Property Maintenance</span>
          </footer>
        </>
      )}
    </>
  )
}