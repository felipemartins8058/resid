import styled from "styled-components";

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    padding: 1rem;
    background: linear-gradient(180deg, #001b34 0.58%, rgba(40, 47, 68, 0) 100%);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;

export const Flex25 = styled.div`
    flex:  0 0 25%;
`

export const Flex50 = styled.div`
    flex:  0 0 50%;
`

export const Logo = styled.div`
    max-width: 100px;
    /* margin: auto; */
`;

export const InfoBox = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    justify-content: flex-end;

    .info-box {
        flex: 0;
    }
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