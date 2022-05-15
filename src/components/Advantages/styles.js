import styled from "styled-components";
import media from "../../images/advantagens.png";

export const AdvantagesWrapper = styled.section`
    position: relative;
    padding: 5rem 0 2rem;
    margin-top: 10rem;
    /* background: url(${media}) no-repeat center; */
`;

export const ImageBackground = styled.div`
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

    .gatsby-image-wrapper{
        height: 100%;
    }
`;

export const AdvantagesGrid = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 255px);
    justify-content: center;
    gap: 60px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
`;

export const AdvantagesItem = styled.div`
    background: #282f44;
    padding: 5rem 1.5rem 4rem;
`;

export const Text = styled.p`
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 28px;
    color: #ececec;
`;

export const AdvantagesTitleWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 5rem;
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
`;

export const AdvantagesImage = styled.div`
    margin-bottom: 4rem;
`;

export const TransparentButton = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #fff;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(236, 236, 236, 0.01);
    border: 1px solid #0bb5a8;
    backdrop-filter: blur(1px);
    margin-top: 3rem;
    text-decoration: none;
    transition: cubic-bezier(0.19, 1, 0.22, 1) 600ms;

    &:hover {
        backdrop-filter: blur(16px);
        transition: cubic-bezier(0.19, 1, 0.22, 1) 600ms;
    }
`;
