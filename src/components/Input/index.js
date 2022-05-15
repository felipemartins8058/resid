import React from "react";
import * as S from "./styles";

const Input = ({ id, type, label, required }) => {
    function isRequired(required) {
        console.log(required);
        if (required) {
            return (
                <S.Container>
                    <S.Input id={id} type={type} required/>
                    <S.Label>{label}</S.Label>
                </S.Container>
            );
        } else {
            return (
                <S.Container>
                    <S.Input id={id} type={type}/>
                    <S.Label>{label}</S.Label>
                </S.Container>
            );
        }
    }

    return (
        isRequired(required)
    );
};

export default Input;
