import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTA from "../CTA";
import * as S from "./styles";

const House = ({ ...props }) => {
    function SwitchImage(imageName) {
        switch (imageName) {
            case 1:
                return <StaticImage src={"../../images/lote1.jpg"} layout="fullWidth" />;
                break;
            case 2:
                return <StaticImage src={"../../images/lote2.jpg"} layout="fullWidth" />;
                break;
            default:
                return <h1>Erro</h1>;
                break;
        }
    }
    return (
        <S.HouseWrapper>
            <S.HouseImage>{SwitchImage(props.image)}</S.HouseImage>
            <div className="px-1">
                <S.Display3>{props.title}</S.Display3>
                <S.Text>{props.text}</S.Text>
                <CTA text={"Quero meu lote"} mt={2} />
            </div>
        </S.HouseWrapper>
    );
};

export default House;
