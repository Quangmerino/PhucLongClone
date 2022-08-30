import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import { dataSlideHeader } from "../../../../data";

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
        className="mySwiper hidden sm:flex w-[50px]"
      >
        {
          dataSlideHeader.map((item,index)=>{
            return (
              <SwiperSlide key={index}>
                <Link to={item.href}>
                  <img className="w-[50px]" src={item.images} alt="logo" />
                </Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
