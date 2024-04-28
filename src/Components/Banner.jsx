import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/bundle";
const Banner = () => {
    return (
        <div>
            <div>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 2000 }}
        >
          <SwiperSlide>
            <div className="slide1 slider">
              <h1 className="text-5xl font-extrabold text-black">“Jobs fill your pocket, but adventures fill your soul.” – Jamie Lyn Beatty</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide2 slider">
              <h1 className="text-5xl font-extrabold text-black">“Life is either a daring adventure or nothing at all.” – Helen Keller</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide3 slider">
              <h1 className="text-5xl font-extrabold text-black">“Oh the places you’ll go.” – Dr. Seuss</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide4 slider">
              <h1 className="text-5xl font-extrabold text-black">“Adventure is worthwhile.” – Aesop</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
        </div>
    );
};

export default Banner;