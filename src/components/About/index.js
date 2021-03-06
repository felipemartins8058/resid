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
                        <StaticImage src="../../images/cliente1.jpg" alt="Fulano" />
                    </S.OwnerImage>
                    <S.OwnerInfo>
                        <S.Display4>Marlon Arruda</S.Display4>
                        <S.Text>
                            "A Resid nos acompanhou desde o inicio, da escolha do lote junto com os corretores parceiros, até toda a resolução de documentação do lote junto a incorporadora do condomínio. Em nenhum momento a gente ficou sem saber informações de como estava nosso processo. Trouxeram total credibilidade."
                        </S.Text>
                    </S.OwnerInfo>
                </S.OwnerWrapper>
                <S.OwnerWrapper>
                    <S.OwnerImage>
                        <StaticImage src="../../images/cliente2.jpg" alt="Fulano" />
                    </S.OwnerImage>
                    <S.OwnerInfo>
                        <S.Display4>Victor & Ingrid Andrade</S.Display4>
                        <S.Text>
                            "Eu que já acompanhei algumas obras de construção civil, nunca vi nada parecido. Então eu sempre faço questão de indicar para amigos, familiares ou qualquer pessoa que me pergunta como está a minha, pois eles além de realizar o sonho, a sua casa vai estar dentro dos maiores padrões da construção cívil atualmente"
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
                <form name="contact" method="POST" data-netlify="true">
                    <Input id="name" name="nome" type="text" label="Nome" required={true} />
                    <Input id="email" name="email" type="email" label="E-mail" required={true} />
                    <Input id="number" name="numero" type="number" label="Whatsapp" required={true} />
                    <input type="hidden" name="form-name" value="contact" />
                    <S.Button background={"001B34"} mt={2} type="submit">Enviar</S.Button>
                </form>
            </S.ContactWrapper>
        </S.Section>
    )
}

export default About;