import React from "react";
import {
  Card,
  AboutTextSection,
  VerticalDivider,
  AboutText,
  AboutTextTitle,
  CardContainer,
} from "./styles";

const About = () => {
  return (
    <CardContainer>
      <Card>
        <AboutTextTitle>Sobre nós</AboutTextTitle>
        <AboutText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit harum corporis quisquam vitae modi distinctio
          laudantium, numquam voluptatem libero iusto dolorem commodi sequi fuga
          similique. Modi possimus vel repellat iste. Deleniti amet ad
          reiciendis veritatis et doloremque non pariatur autem quibusdam sequi
          eaque expedita at iste molestias inventore, deserunt libero modi.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit maiores
          quos enim ex cum exercitationem sint laudantium nesciunt? Autem
          incidunt temporibus saepe deleniti magni expedita perspiciatis
          inventore animi consectetur in! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Ab ullam voluptatem aspernatur dolorem
          temporibus quo accusantium. Veniam, quas impedit. Sit doloribus, saepe
          in nobis laudantium praesentium harum vel quidem incidunt?
        </AboutText>
      </Card>
      <Card>2</Card>
    </CardContainer>
  );
};
export default About;
