import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { StaticImage } from "gatsby-plugin-image";

const GallerySlide = () => {
    return (
        <Swiper spaceBetween={60} slidesPerGroup={1} slidesPerView={1} breakpoints={{767:{ slidesPerView: 3, slidesPerGroup: 3 }}} autoplay={{delay: 0, disableOnInteraction: false}} speed={8000} loop={true} modules={[Autoplay]} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
                <StaticImage src="../../images/gallery_image1.png" quality={10} />
            </SwiperSlide>
            <SwiperSlide>
                <StaticImage src="../../images/gallery_image2.png" quality={10} />
            </SwiperSlide>
            <SwiperSlide>
                <StaticImage src="../../images/gallery_image3.png" quality={10} />
            </SwiperSlide>
            <SwiperSlide>
                <StaticImage src="../../images/gallery_image4.png" quality={10} />
            </SwiperSlide>
        </Swiper>
    );
};

export default GallerySlide;
