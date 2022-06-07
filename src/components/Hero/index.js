import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import CTA from '../CTA'
import * as S from './styles'

const Hero = () => {
    return (
        <S.HeroWrapper>
            <S.HeroBackground>
                <StaticImage layout='fullWidth' src="../../images/hero.jpeg" alt="Hero" />
            </S.HeroBackground>
            <S.HeroTitleWrapper>
                <S.Subtitle>Resid</S.Subtitle>
                <S.Display1>
                    Seu sonho, agora sua realidade
                </S.Display1>
            </S.HeroTitleWrapper>
            <CTA text={"Inicie sua casa nova"} mt={3} />
        </S.HeroWrapper>
    )
}

export default Hero