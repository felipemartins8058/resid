import styled from "styled-components";

export const Footer = styled.footer`
    padding: 5rem 0;
    display: grid;
    grid-template-columns: repeat(2, 570px);
    gap: 60px;
    justify-content: center;

    .flex-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 5rem 1rem;
    }
`;

export const Display3 = styled.h3`
    /* Display-3 */

    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 56px;
    margin-bottom: 2rem;
    /* identical to box height */

    text-transform: uppercase;

    /* Gray Primary */

    color: #ececec;
`;

export const SmallText = styled.p`
    /* small-text */

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    /* Gray Primary */

    color: #ececec;
`;

export const Display4 = styled.h4`
    /* Display-4 */

    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 31px;
    line-height: 41px;
    margin-bottom: 2.5rem;

    /* Gray Primary */

    color: #ececec;
`;

export const InfoBox = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .info-box {
        flex: 0 0 90%;
    }

    @media (max-width: 768px) {
        .info-box{
            flex: 1;
        }
    }
`;
