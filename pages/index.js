// NextJS
import Head from 'next/head'
import Image from 'next/image'
// React
import { useState, useEffect } from 'react';
// Dependencies
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
// Utils
import { services } from '../utils/services'
import { testimonials } from '../utils/testimonials';
import Script from 'next/script';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1850)
  }, []);

  return (
    <>
      <Script strategy="lazyOnload" src={'https://www.googletagmanager.com/gtag/js?id=UA-227017952-1'}></Script>
	  <Script strategy="lazyOnload" id="gtag">{`
	    window.dataLayer = window.dataLayer || [];
	      function gtag(){dataLayer.push(arguments);}
	        gtag('js', new Date());

		  gtag('config', 'UA-227017952-1');`}
	  </Script>
      <Head>
        <title>D & D Maintenance Services LLC</title>
        <meta name="description" content="D & D Maintenance Services LLC. Lawn care, gutter cleaning, floor remodels, and more! Servicing Connecticut and the greater New London county." />
	<meta name="keywords" content="landscaping services near me landscaping services list affordable lawn care near me homeadvisor ct natural lawn care ct landscaping hedge trimming tree removal gutters trash removal floor remodels painting staining pressure washing interior demolition debris removal" />
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
                D & D Maintenance Services LLC
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
                  <div className="contact-card" style={ { textAlign: 'center' } }>
                    <center><span className="contact-card-name">D & D Maintenance Services LLC</span></center>
                    <br />
	      	    <span className="contact-card-phone">
	      		<FaEnvelope size="16px" style={{marginRight: "0.5rem"}} />
	      		<a href="mailto:info@ddmaintenance.services">info@ddmaintenance.services</a>
	      	    </span>
	      		<br />
	      <br />
                    <span className="contact-card-phone">
                      <FaPhoneAlt size="16px" style={{marginRight: "0.5rem"}} />
                      <a href="tel:+1-860-775-5775">+1-860-775-5775</a>
                    </span>
	      <br />
	      		<br />
	      		<span className="contact-card-phone"><center>
	      153 Boston Post Road<br />Ste 2 PMB1057<br />East Lyme, CT 06333
	      </center></span>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="footer">
            <span>Copyright 2022 &copy; D & D Maintenance Services LLC</span>
          </footer>
        </>
      )}
    </>
  )
}
