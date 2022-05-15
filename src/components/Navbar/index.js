import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as S from "./styles";

const Navbar = () => {
    return (
        <S.Navbar>
            <S.Flex25>
                <StaticImage src="../../images/menu.png" />
            </S.Flex25>
            <S.Flex50>
                <S.LogoTitle>Resid</S.LogoTitle>
            </S.Flex50>
            <S.Flex25>
                <S.InfoBox>
                    <div>
                        <StaticImage src="../../images/phone.png" />
                    </div>
                    <div className="info-box">
                        <S.SmallText>(85)98765.4321</S.SmallText>
                    </div>
                </S.InfoBox>
            </S.Flex25>
        </S.Navbar>
    );
};

export default Navbar;
