import React from "react";
import {
  Card,
  AboutText,
  AboutTextTitle,
  CardContainer,
  AboutSubtitle,
  AboutImage,
} from "./styles";
import unb from "../../assets/unb.png";
const About = () => {
  return (
    <CardContainer>
      <Card>
        <AboutTextTitle>Sobre nós</AboutTextTitle>
        <AboutText>
          Nós, estudantes da UnB, de diferentes cursos de computação, unimos
          forças para criar este site com React.js, Node.js e PostgreSQL. Nosso
          objetivo é tornar a educação mais acessível por meio do empréstimo de
          materiais educacionais. Seja bem-vindo ao nosso projeto!
        </AboutText>
        <AboutSubtitle>- Equipe de Banco de Dados da UnB.</AboutSubtitle>

        <AboutImage src={unb} alt="Universidade de Brasília" />
      </Card>
      <Card>
        <AboutTextTitle> Como utilizar</AboutTextTitle>
        <AboutText>
          <b>Cadastro de Materiais:</b> Faça login, adicione materiais para
          empréstimo e compartilhe com outros. <b>Pedir empréstimos:</b> Busque
          materiais desejados, solicite empréstimos e acompanhe suas
          solicitações. <b>Login e Cadastro:</b> Crie sua conta ou faça login
          para acessar todas as funcionalidades. <b>Acompanhe Empréstimos:</b>
          Veja o status das suas solicitações em "Meus Empréstimos". Simples
          assim! Estamos aqui para ajudar, caso precise de suporte.
        </AboutText>
        <AboutTextTitle>Dúvidas?</AboutTextTitle>
        <AboutText>
          Veja o vídeo demo no YouTube ou nos mande um e-mail! Feedback também é
          sempre bem vindo :)
        </AboutText>
      </Card>
    </CardContainer>
  );
};
export default About;
