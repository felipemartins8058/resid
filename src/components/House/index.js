import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import CTA from "../CTA";
import * as S from "./styles";

const House = ({ ...props }) => {
    function SwitchImage(imageName) {
        switch (imageName) {
            case 1:
                return <StaticImage src={"../../images/187.jpeg"} layout="fullWidth" />;
                break;
            case 2:
                return <StaticImage src={"../../images/192.jpg"} layout="fullWidth" />;
                break;
            case 3:
                return <StaticImage src={"../../images/232.jpeg"} layout="fullWidth" />;
                break;
            case 4:
                return <StaticImage src={"../../images/235.jpeg"} layout="fullWidth" />;
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
            </div>
        </S.HouseWrapper>
    );
};

export default House;
