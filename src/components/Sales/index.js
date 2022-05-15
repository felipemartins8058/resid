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
                <S.Subtitle>Lotes</S.Subtitle>
                <S.Display1>à venda</S.Display1>
            </S.SalesTitleWrapper>
            {/* <S.Display1>Casas Prontas</S.Display1> */}
            <Swiper spaceBetween={60} navigation={true} slidesPerView={1} breakpoints={{767:{slidesPerView: 2}}} modules={[Navigation]} onSlideChange={() => console.log("slide change")} onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide><House title={"Lote Schönbrunn"} image={1} text={"Victory Gallery is at your service – your personal space for shopping and entertainment, featuring a swimming pool and a spa, beauty salons, restaurants and gastropubs, cinemas and an oceanarium. Discover a plethora of ways to treat yourself and show your loved ones that you care for them."} /></SwiperSlide>
                <SwiperSlide><House title={"Lote Residence"} image={2} text={"Victory Gallery is at your service – your personal space for shopping and entertainment, featuring a swimming pool and a spa, beauty salons, restaurants and gastropubs, cinemas and an oceanarium. Discover a plethora of ways to treat yourself and show your loved ones that you care for them."} /></SwiperSlide>
                <SwiperSlide><House title={"Lote Residence"} image={1} text={"Victory Gallery is at your service – your personal space for shopping and entertainment, featuring a swimming pool and a spa, beauty salons, restaurants and gastropubs, cinemas and an oceanarium. Discover a plethora of ways to treat yourself and show your loved ones that you care for them."} /></SwiperSlide>
                <SwiperSlide><House title={"Lote Schönbrunn"} image={2} text={"Victory Gallery is at your service – your personal space for shopping and entertainment, featuring a swimming pool and a spa, beauty salons, restaurants and gastropubs, cinemas and an oceanarium. Discover a plethora of ways to treat yourself and show your loved ones that you care for them."} /></SwiperSlide>
            </Swiper>
        </S.SalesWrapper>
    );
};

export default Sales;
