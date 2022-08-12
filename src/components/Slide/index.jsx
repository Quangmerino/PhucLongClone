import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

// import img slide
import slide1 from "./images/img1.png";
import slide2 from "./images/img2.jpeg";
import slide3 from "./images/img3.png";
import slide4 from "./images/img4.jpeg";

export default function Slide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt=''/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt=''/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
