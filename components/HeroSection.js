import React from 'react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const HeroSection = () => {
  const slidesData = [
    { image: '/img/Afara leadership  centre lagos 20 march 2006.JPG', text: 'Afara leadership centre' },
    { image: '/img/Afara leadership  centre lagos 20 march 2006-2.JPG', text: 'Afara leadership centre' },
    { image: '/img/SMA CHAPEL.JPG', text: 'SMA Chapel' },
    { image: '/img/UI sports field-track.jpg', text: 'UI sports track field' },
    { image: '/img/capuchin church ibadan fri26AUG05 020.jpg', text: 'Capuchin Church' },
    { image: '/img/capuchin church ibadan.jpg', text: 'Capuchin Church' },
    { image: '/img/fan milk 200ton cold store 1aug07011.JPG', text: '' },
    { image: '/img/fanmilk 50cu.m tank 29MAR2007001.JPG', text: '' },
    { image: '/img/redeemer house fri28oct05 010.jpg', text: 'Redeemer House' },
    { image: '/img/redeemer house wed8dec05 037.jpg', text: 'Redeemer House' },

  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={true}
      autoplay={{ delay: 2000, disableOnInteraction: false}}
      pagination={{ clickable: true }}
      style={{ width: '100%', height: '500px' }} // Set a fixed height for the swiper container
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index} style={{ position: 'relative' }}>
          <img src={slide.image} alt={slide.text} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-2 rounded">
            {slide.text}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
