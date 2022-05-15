import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as S from "./styles";

const Advantages = () => {
    return (
        <S.AdvantagesWrapper>
            <S.ImageBackground>
                <StaticImage src="../../images/advantagens.png" layout="fullWidth" />
            </S.ImageBackground>
            <S.AdvantagesTitleWrapper>
                <S.Subtitle>Luxury</S.Subtitle>
                <S.Display1>Nosso Método</S.Display1>
            </S.AdvantagesTitleWrapper>
            <S.AdvantagesGrid>
                <S.AdvantagesItem>
                    <S.AdvantagesImage>
                        <StaticImage src="../../images/plus_icon.png" />
                    </S.AdvantagesImage>
                    <S.Text>
                        Central heating convectors along the perimeter of the apartment
                    </S.Text>
                </S.AdvantagesItem>
                <S.AdvantagesItem>
                    <S.AdvantagesImage>
                        <StaticImage src="../../images/sun_icon.png" />
                    </S.AdvantagesImage>
                    <S.Text>
                        Central heating convectors along the perimeter of the apartment
                    </S.Text>
                </S.AdvantagesItem>
                <S.AdvantagesItem>
                    <S.AdvantagesImage>
                        <StaticImage src="../../images/sport_icon.png" />
                    </S.AdvantagesImage>
                    <S.Text>
                        Central heating convectors along the perimeter of the apartment
                    </S.Text>
                </S.AdvantagesItem>
                <S.AdvantagesItem>
                    <S.AdvantagesImage>
                        <StaticImage src="../../images/food_icon.png" />
                    </S.AdvantagesImage>
                    <S.Text>
                        Central heating convectors along the perimeter of the apartment
                    </S.Text>
                </S.AdvantagesItem>
            </S.AdvantagesGrid>
            <S.TransparentButton href="#">
                Marque sua reunião
            </S.TransparentButton>
        </S.AdvantagesWrapper>
    )
}

export default Advantages;