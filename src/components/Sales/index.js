import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Navigation } from "swiper";
import "swiper/css/navigation";

import House from "../House";
import * as S from "./styles";

const Sales = () => {
    return (
        <S.SalesWrapper>
            <S.SalesTitleWrapper>
                <S.Subtitle>Nossas</S.Subtitle>
                <S.Display1>Realizações</S.Display1>
            </S.SalesTitleWrapper>
            {/* <S.Display1>Casas Prontas</S.Display1> */}
            <Swiper spaceBetween={60} navigation={true} slidesPerView={1} breakpoints={{767:{slidesPerView: 2}}} modules={[Navigation]} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide><House title={"Condomínio Central Park II"} image={1} text={"Tamanho: 187 m2"}  /></SwiperSlide>
                <SwiperSlide><House title={"Casa Térrea Condomínio Parque Morumbi"} image={2} text={"Tamanho: 192 m2"}  /></SwiperSlide>
                <SwiperSlide><House title={"Casa Térrea Condomínio Parque Morumbi"} image={3} text={"Tamanho: 232 m2"} /></SwiperSlide>
                <SwiperSlide><House title={"Condomínio Alphaville"} image={4} text={"Tamanho: 235 m2"} /></SwiperSlide>
            </Swiper>
        </S.SalesWrapper>
    );
};

export default Sales;
