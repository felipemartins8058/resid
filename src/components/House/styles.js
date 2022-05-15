import styled from "styled-components";

export const HouseWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        .px-1 {
            padding: 0 1rem;
        }
    }
`;

export const HouseImage = styled.div`
    position: relative;
    width: 100%;

    h3 {
        /* Display-3 */
        font-family: "Playfair Display";
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 56px;
        text-align: end;
        /* identical to box height */
        text-transform: uppercase;
        color: #0bb5a8;
        text-shadow: 0px 0px 8px #000;
        transform: translateY(-20px);
    }
`;

export const Display3 = styled.h3`
    /* Display-3 */
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 56px;
    text-align: end;
    /* identical to box height */
    text-transform: uppercase;
    color: #0bb5a8;
    text-shadow: 0px 0px 8px #000;
    transform: translateY(-20px);
`;

export const Text = styled.p`
    /* small-text */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
    margin-top: 1rem;
`;
