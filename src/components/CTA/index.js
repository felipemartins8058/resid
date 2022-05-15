import React from "react";
import * as S from "./styles";

const CTA = ({...props}) => {
    return(
        <S.Button href="#" mt={props.mt} background={props.bg}>{props.text}</S.Button>
    )
}

export default CTA;