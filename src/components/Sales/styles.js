import styled from "styled-components";

export const SalesWrapper = styled.section`
    max-width: 1200px;
    margin: auto;
    margin-top: 10rem;
`
export const SalesTitleWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 4rem;
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
        top: -100px;
    }
`;