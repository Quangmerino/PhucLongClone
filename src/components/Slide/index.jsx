import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import slide1 from "./images/img1.png";
import slide2 from "./images/img2.jpeg";
import slide3 from "./images/img3.png";
import slide4 from "./images/img4.jpeg";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <img src={slide1} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
            <img src={slide2} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
            <img src={slide3} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to='/'>
            <img src={slide4} alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
