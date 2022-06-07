import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import CTA from "../CTA";
import * as S from "./styles";

const Footer = () => {
    return (
        <S.Footer>
            <div className="flex-container">
                <S.Logo>
                    <StaticImage src="../../images/logo.png" quality={1} />
                </S.Logo>
                <S.SmallText>A Resid é mais que uma construtora, somo parceiros do nossos clientes e buscamos resolver todas os percalços que uma construção possa vir a ter, para que o cliente consiga curtir todas as fases da construção, desde a aquisição do terreno até a entrega das chaves. <br/> <br/>  <strong>Resid, casa com o seu jeito.</strong></S.SmallText>
                <CTA mt={3} text={"Inicie sua casa nova"} />
            </div>
            <div>
                <S.Display4>Entre em contato</S.Display4>
                <S.InfoBox>
                    <div>
                        <StaticImage src="../../images/whatsapp.png" />
                    </div>
                    <div className="info-box">
                        <S.SmallText>84 98808-8383</S.SmallText>
                    </div>
                </S.InfoBox>
                <S.InfoBox>
                    <div>
                        <StaticImage src="../../images/instagram.png" />
                    </div>
                    <div className="info-box">
                        <S.SmallText>@sigaresid</S.SmallText>
                    </div>
                </S.InfoBox>
                <S.InfoBox>
                    <div>
                        <StaticImage src="../../images/phone.png" />
                    </div>
                    <div className="info-box">
                        <S.SmallText>84 98808-8383</S.SmallText>
                    </div>
                </S.InfoBox>
            </div>
        </S.Footer>
    );
};

export default Footer;
