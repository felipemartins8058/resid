import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as S from "./styles";

const Advantages = () => {
    return (
        <S.AdvantagesWrapper>
            <S.ImageBackground>
                <StaticImage src="../../images/advantagens.png" layout="fullWidth" />
            </S.ImageBackground>
            <S.AdvantagesTitleWrapper>
                <S.Subtitle>Qualidade</S.Subtitle>
                <S.Display1>Nosso Método</S.Display1>
            </S.AdvantagesTitleWrapper>
            <S.AdvantagesGrid>
                <S.AdvantagesItem>
                    <S.AdvantagesImage>
                        <StaticImage src="../../images/plus_icon.png" />
                    </S.AdvantagesImage>
                    <S.Text>
                        FINANCIAMENTO DO TERRENO E CONTRUÇÃO
                    </S.Text>
                    <S.TextSmall>
                        Você sabia que pode financiar tanto a aquisição do terreno como a construção da sua casa? Aqui você terá uma assessoria completa com os profissionais mais qualificados do mercado para viabilizar seu financiamento. Deixe-nos ajudá-lo a tomar as melhores decisões.
                    </S.TextSmall>
                </S.AdvantagesItem>
                <S.AdvantagesItem>
                    <S.AdvantagesImage>
                        <StaticImage src="../../images/plus_icon.png" />
                    </S.AdvantagesImage>
                    <S.Text>
                        PROJETO ARQUITETÔNICO
                    </S.Text>
                    <S.TextSmall>
                        Nosso setor de arquitetura desenvolverá seu projeto. Colocaremos seu sonho no papel e só avançaremos quando todas as suas necessidades forem atendidas. E o melhor, não há custo adicional por isso.
                    </S.TextSmall>
                </S.AdvantagesItem>
                <S.AdvantagesItem>
                    <S.AdvantagesImage>
                        <StaticImage src="../../images/plus_icon.png" />
                    </S.AdvantagesImage>
                    <S.Text>
                        PROJETOS COMPLEMENTARES
                    </S.Text>
                    <S.TextSmall>
                        Com seu projeto concluído, nossa equipe de projetistas estarão prontos para desenvolver os projetos de estrutura, elétrico, hidráulico, sanitário, drenagem e tudo mais que for necessário. Deixe a responsabilidade técnica em nossas mãos.
                    </S.TextSmall>
                </S.AdvantagesItem>
                <S.AdvantagesItem>
                    <S.AdvantagesImage>
                        <StaticImage src="../../images/plus_icon.png" />
                    </S.AdvantagesImage>
                    <S.Text>
                        LEGALIZAÇÃO
                    </S.Text>
                    <S.TextSmall>
                        Você não precisa se especializar nem perder seu valioso tempo com os processos burocráticos que envolvem essa jornada. Você fará isso uma ou duas vezes em sua vida, nós fazemos todos dias. Deixe esse trabalho para quem entende e pode agilizar tudo para você. Financiamento bancário, cartórios, prefeitura, condomínio… Nós preparamos e despachamos tudo para que você não tenha nenhuma dor de cabeça e possa aproveitar seu tempo com a família e amigos.
                    </S.TextSmall>
                </S.AdvantagesItem>
                <S.AdvantagesItem>
                    <S.AdvantagesImage>
                        <StaticImage src="../../images/plus_icon.png" />
                    </S.AdvantagesImage>
                    <S.Text>
                        GERENCIAMENTO DA CONSTRUÇÃO
                    </S.Text>
                    <S.TextSmall>
                        Com tudo pronto, iniciaremos sua obra e agora é só curtir o processo. Você será chamado pela nossa equipe de engenharia sempre que for necessário para lhe auxiliar nas melhores decisões. Prestamos assessoria completa para que você economize, tendo acesso aos melhores preços do mercado.
                    </S.TextSmall>
                </S.AdvantagesItem>
                <S.AdvantagesItem>
                    <S.AdvantagesImage>
                        <StaticImage src="../../images/plus_icon.png" />
                    </S.AdvantagesImage>
                    <S.Text>
                        PORTAL DO CLIENTE
                    </S.Text>
                    <S.TextSmall>
                        Somente aqui você conta com o portal do cliente, totalmente online. Lá você poderá acompanhar o desenvolvimento da sua obra através de fotos e relatórios semanais. Tudo na palma da sua mão através do aplicativo. Agora é só relaxar e preparar a mudança.
                    </S.TextSmall>
                </S.AdvantagesItem>
            </S.AdvantagesGrid>
            <S.TransparentButton href="https://wa.me/558488088383">
                Marque sua reunião
            </S.TransparentButton>
        </S.AdvantagesWrapper>
    )
}

export default Advantages;