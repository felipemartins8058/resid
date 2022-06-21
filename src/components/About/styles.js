import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 570px);
    gap: 60px;
    justify-content: center;
    margin-top: 10rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;

        .px-1 {
            padding: 0 1rem;
        }
    }
`;

export const Display2 = styled.h2`
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 75px;
    text-transform: uppercase;
    color: #001B34;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
        font-size: 48px;
    }
`;

export const Display4 = styled.h4`
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 31px;
    line-height: 41px;
    color: #ececec;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
        margin-bottom: 4rem;
    }
`;

export const Text = styled.p`
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #ececec;
`;

export const OwnerWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const OwnerImage = styled.div`
    flex: 0 0 30%;

    @media (max-width: 768px) {
        flex: 1;
    }
`;

export const OwnerInfo = styled.div`
    flex: 1;
`;

export const ContactWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #0bb5a8;
    padding: 3rem;

    form{
        width: 100%
    }

    @media (max-width: 768px) {
        padding: 3rem 1rem;
    }
`;

export const ContactTitleWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
`;

export const Subtitle = styled.h2`
    font-family: "Herr Von Muellerhoff";
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    letter-spacing: 0.05em;
    color: #fff;
    text-shadow: 0px 14.2804px 49.9813px rgba(24, 39, 75, 0.12), 0px 32.1308px 157.084px rgba(24, 39, 75, 0.14);
    position: absolute;
    top: 0;
    left: -39%;
    right: 0;
    bottom: 0;

    @media (max-width: 768px) {
        left: -34%;
    }
`;

export const Button = styled.button`
    display: block;
    text-align: center;
    text-decoration: none;
    color: #fff;
    padding: 1rem 2rem;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    background: ${(props) => props.background ? `#${(props.background)}` : `#0BB5A8`};
    border: 1px solid rgba(255, 255, 255, 0.33);
    border-radius: 50px;
    margin-top: ${(props) => `${props.mt}rem`};
    cursor: pointer;
`