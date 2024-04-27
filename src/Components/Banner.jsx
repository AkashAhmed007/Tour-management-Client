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
              <h1 className="text-8xl font-extrabold text-black">Slide1</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide2 slider">
              <h1 className="text-8xl font-extrabold text-black">Slide2</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide3 slider">
              <h1 className="text-8xl font-extrabold text-black">Slide3</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide4 slider">
              <h1 className="text-8xl font-extrabold text-black">Slide4</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
        </div>
    );
};

export default Banner;