import React from "react";
import * as S from "./styles";

const CTA = ({...props}) => {
    return(
        <S.Button href="https://wa.me/558488088383" mt={props.mt} background={props.bg}>{props.text}</S.Button>
    )
}

export default CTA;