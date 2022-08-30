import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import { dataSlide } from "../../data";

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
        {
          dataSlide.map((item, index) => {
            return(
              <SwiperSlide key={index}>
                <Link to={item.href}>
                  <img className="w-full" src={item.images} alt="banner" />
                </Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
