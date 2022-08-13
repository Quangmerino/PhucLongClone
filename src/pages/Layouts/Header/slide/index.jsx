import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import logo1 from "./images/logo.png";
import logo2 from "./images/logo1.png";
import logo3 from "./images/logo2.png";
import { Link } from "@mui/material";

export default function SlideHeader() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-[50px]"
      >
        <SwiperSlide>
          <Link to="/">
            <img className="w-[50px]" src={logo1} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img className="w-[50px]" src={logo2} alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img className="w-[50px]" src={logo3} alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
