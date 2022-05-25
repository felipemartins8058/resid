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
                <S.Logo>
                    <StaticImage src="../../images/logo.png" quality={1} />
                </S.Logo>
            </S.Flex50>
            <S.Flex25>
                <S.InfoBox>
                    <div>
                        <StaticImage src="../../images/whatsapp.png" />
                    </div>
                    <div className="info-box">
                        <S.SmallText>(84)98808.8383</S.SmallText>
                    </div>
                </S.InfoBox>
            </S.Flex25>
        </S.Navbar>
    );
};

export default Navbar;
