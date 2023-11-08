import React from "react";
import { Card, AboutTextSection, VerticalDivider, AboutText } from "./styles";

const About = () => {
  return (
    <Card>
      <AboutTextSection>
        <h2>Sobre nós</h2>
        <AboutText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit harum corporis quisquam vitae modi distinctio
          laudantium, numquam voluptatem libero iusto dolorem commodi sequi fuga
          similique. Modi possimus vel repellat iste. Deleniti amet ad
          reiciendis veritatis et doloremque non pariatur autem quibusdam sequi
          eaque expedita at iste molestias inventore, deserunt libero modi. Quo
          recusandae reprehenderit explicabo neque voluptate, voluptatem dolore
          repellat? Sed vel molestiae voluptatem harum quasi assumenda similique
          dolorem, facere dolore deleniti qui eaque doloribus delectus repellat
          quod mollitia nam? Obcaecati ducimus, dolore culpa eligendi
          perferendis accusantium ratione vel laudantium.
        </AboutText>
      </AboutTextSection>
      <VerticalDivider />
      <AboutTextSection>
        <p>more</p>
      </AboutTextSection>
    </Card>
  );
};
export default About;
