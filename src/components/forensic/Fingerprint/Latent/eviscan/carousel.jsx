import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Parallax, Pagination, Autoplay, Navigation, EffectCube, EffectFade } from "swiper";

import 'swiper/css/effect-fade'
import 'swiper/swiper.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/less/grid';

export default function MyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Swiper
      speed={600}
      loop={true}
      parallax={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-navigation-size': '13px',
      }}
      modules={[Parallax, Pagination, Navigation, EffectFade]}
      slideToClickedSlide={true}
      className="relative lg:h-44 md:h-40 sm:h-44 w-36 bg-stone-400"
      onSlideChange={(e) => {
        setActiveIndex(e.realIndex);
      }}
      effect="fade"
    >
      <SwiperSlide key={0} className='relative' data-aos='fade-in'>
        <div className='absolute w-full'>
          <img className="w-full relative h-[180px]" src="../../../img/forensic/chemical/chemical/c1.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide key={1} className='relative' data-aos='fade-in'>
        <div className='absolute w-full'>
          <img className="w-full relative h-[180px]" src="../../../img/forensic/chemical/chemical/c2.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide key={3} className='relative' data-aos='fade-in'>
        <div className='absolute w-full'>
          <img className="w-full relative h-[180px]" src="../../../img/forensic/chemical/chemical/c3.jpg" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}