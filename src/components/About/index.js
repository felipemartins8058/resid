import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Input from "../Input";
import CTA from "../CTA";
import * as S from "./styles";

const About = () => {
    return(
        <S.Section>
            <div className="px-1">
                <S.Display4>Nossos Clientes</S.Display4>
                <S.OwnerWrapper>
                    <S.OwnerImage>
                        <StaticImage src="../../images/perfil.png" alt="Fulano" />
                    </S.OwnerImage>
                    <S.OwnerInfo>
                        <S.Display4>Cliente 1</S.Display4>
                        <S.Text>
                            "Duis congue lectus nec eros efficitur vulputate. Maecenas posuere pulvinar ante in congue."
                        </S.Text>
                    </S.OwnerInfo>
                </S.OwnerWrapper>
                <S.OwnerWrapper>
                    <S.OwnerImage>
                        <StaticImage src="../../images/perfil.png" alt="Fulano" />
                    </S.OwnerImage>
                    <S.OwnerInfo>
                        <S.Display4>Cliente 2</S.Display4>
                        <S.Text>
                            "Duis congue lectus nec eros efficitur vulputate. Maecenas posuere pulvinar ante in congue."
                        </S.Text>
                    </S.OwnerInfo>
                </S.OwnerWrapper>
            </div>
            <S.ContactWrapper>
                <S.ContactTitleWrapper>
                    <S.Display2>
                        Faça Visita
                    </S.Display2>
                    <S.Subtitle>uma</S.Subtitle>
                </S.ContactTitleWrapper>
                <Input id="name" type="text" label="Nome" required={true}/>
                <Input id="email" type="email" label="E-mail" required={true}/>
                <Input id="number" type="number" label="Whatsapp" required={true}/>
                <CTA bg={"001B34"} text={"Fazer um orçamento online"} mt={3} />
            </S.ContactWrapper>
        </S.Section>
    )
}

export default About;