import styled from "styled-components";

export const Label = styled.label`
    /* small-text */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    color: #001b34;
    z-index: 1;
    position: absolute;
    top: 1rem;
    left: 0;
    vertical-align: middle;
    transform: scale(1);
    transform-origin: 0%;
    transition: all ease-in-out 100ms;
    pointer-events: none;
`;

export const Input = styled.input`
    display: block;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    padding: 1rem 0;
    font-size: 1rem;
    z-index: 2;
    background: transparent;
    width: 100%;
`;

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    margin: 1rem auto;

    input:valid + label {
        transform: scale(0.8) translateY(-2rem) translateX(0);
    }

    input:focus + label {
        transform: scale(0.8) translateY(-2rem) translateX(0);
    }
`;
