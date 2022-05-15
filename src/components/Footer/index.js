import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import CTA from "../CTA";
import *  as S from "./styles";


const Footer = () => {
    return (
        <S.Footer>
            <div className="flex-container">
                <S.Display3>Resid</S.Display3>
                <S.SmallText>Central heating convectors along the perimeter of the apartment. Central heating convectors along the perimeter of the apartment</S.SmallText>
                <CTA mt={3} text={"Lorem Ipsum Dolor"} />
            </div>
            <div>
                <S.Display4>Entre em contato</S.Display4>
                <S.InfoBox>
                    <div>
                        <StaticImage src="../../images/whatsapp.png" />
                    </div>
                    <div className="info-box">
                        <S.SmallText>85 98765.4321</S.SmallText>
                    </div>
                </S.InfoBox>
                <S.InfoBox>
                    <div>
                        <StaticImage src="../../images/instagram.png" />
                    </div>
                    <div className="info-box">
                        <S.SmallText>@resid.imoveis</S.SmallText>
                    </div>
                </S.InfoBox>
                <S.InfoBox>
                    <div>
                        <StaticImage src="../../images/phone.png" />
                    </div>
                    <div className="info-box">
                        <S.SmallText>85 98765.4321</S.SmallText>
                    </div>
                </S.InfoBox>
            </div>
        </S.Footer>
    )
}

export default Footer;