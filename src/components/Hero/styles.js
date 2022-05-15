import styled from "styled-components";

export const HeroWrapper = styled.section`
    position: relative;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const HeroBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    opacity: 0.5;
    z-index: -1;

    .gatsby-image-wrapper img {
        top: -15%;
    }

    @media (max-width: 768px) {
        .gatsby-image-wrapper{
            height: 100%;
        }
        .gatsby-image-wrapper img {
            top: 0;
        }
    }
`;

export const HeroTitleWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
`;

export const Display1 = styled.h1`
    font-family: "Playfair Display";
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 75px;
    line-height: 100px;
    /* identical to box height */
    text-transform: uppercase;
    /* Gray Primary */
    color: #ececec;
    text-shadow: 0px 0px 16px #282f44;

    @media (max-width: 768px) {
        font-size: 48px;
        line-height: normal;
    }
`;

export const Subtitle = styled.h2`
    font-family: "Herr Von Muellerhoff";
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 133.879px;
    line-height: 190px;
    letter-spacing: 0.05em;
    color: #0bb5a8;
    text-shadow: 0px 14.2804px 49.9813px rgba(24, 39, 75, 0.12), 0px 32.1308px 157.084px rgba(24, 39, 75, 0.14);
    position: absolute;
    top: -80px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    @media (max-width: 768px) {
        top: 0;
    }
`;
