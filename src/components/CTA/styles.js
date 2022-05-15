import styled from "styled-components";

export const Button = styled.a`
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