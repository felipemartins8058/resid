import styled from "styled-components";

export const ContactSection = styled.section`
    position: relative;
    background: #0bb5a8;
    padding: 5rem 0;
`;

export const ContactTitleWrapper = styled.div`
    position: relative;
    display: block;
    width: 100%;
`;

export const Display2 = styled.h2`
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 75px;
    text-transform: uppercase;
    color: #001b34;
    margin-bottom: 4rem;
    text-align: center;
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
    top: 8%;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: 570px;
    justify-content: center;

    form {
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
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
`