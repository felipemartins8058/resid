import React from "react";
import Input from "../Input";
import CTA from "../CTA";
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
                <form>
                    <Input id="name" type="text" label="Nome" required={true} />
                    <Input id="email" type="email" label="E-mail" required={true} />
                    <Input id="number" type="number" label="Whatsapp" required={true} />
                    <CTA bg={"001B34"} text={"Lorem Ipsum"} mt={3} />
                </form>
            </S.FormWrapper>
        </S.ContactTitleWrapper>
    </S.ContactSection>
);

export default Contact;
