import React, { useEffect, useState } from 'react'
import { musicText } from '../../data/music'
import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Music = () => {

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },400)
  },[]);

  const  videoClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <section id='music' className={videoClass}>
      <h2>🎧추천 음악을 소개합니다.</h2>
      <div className='music__inner'>
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          modules={[Navigation, Autoplay]}
          className='mySwiper'
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 15
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            1240: {
              slidesPerView: 5,
              spaceBetween: 20
            },
            1540: {
              slidesPerView: 6,
              spaceBetween: 20
            },
            1640: {
                slidesPerView: 8,
                spaceBetween: 20
            },
            1600: {
              slidesPerView: 10,
              spaceBetween: 20
            }
          }}
        >
          {musicText.map((music, key)=>(
            <SwiperSlide key={key}>
              <div className='music'>
                <div className='music__img play__icon'>
                  <Link to={`/channel/${music.channelId}`}>
                    <img src={music.img} alt={music.name}/>
                  </Link>
                </div>
                <div className='music__info'>
                  <Link to={`/channel/${music.channelId}`}>
                    {music.name}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Music