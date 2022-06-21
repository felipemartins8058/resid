import React from "react";
import Input from "../Input";
import * as S from "./styles";

const Contact = () => (
    <S.ContactSection>
        <S.ContactTitleWrapper>
            <S.Display2>
                Faça
                <br />
                Visita
            </S.Display2>
            <S.Subtitle>uma</S.Subtitle>
            <S.FormWrapper>
                <form name="contact" method="POST" data-netlify="true">
                    <Input id="name" name="nome" type="text" label="Nome" required={true} />
                    <Input id="email" name="email" type="email" label="E-mail" required={true} />
                    <Input id="number" name="numero" type="number" label="Whatsapp" required={true} />
                    <S.Button type="submit">Enviar</S.Button>
                </form>
            </S.FormWrapper>
        </S.ContactTitleWrapper>
    </S.ContactSection>
);

export default Contact;
