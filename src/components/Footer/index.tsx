import React from "react";
import {
  DevsContainer,
  FooterAnchor,
  FooterContainer,
  FooterTitle,
  TitleContainer,
  VerticalDivider,
} from "./styles";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dev from "../Dev";

const devs = [
  {
    name: "yantavares",
    url: "https://github.com/yantavares",
  },
  {
    name: "rockethm",
    url: "https://github.com/rockethm",
  },
  {
    name: "AleFreitas",
    url: "https://github.com/AleFreitas",
  },

];

const Footer = () => {
  return (
    <FooterContainer>
      <TitleContainer>
        <FooterTitle>Dê uma </FooterTitle>
        <FontAwesomeIcon icon={faStar} size="lg" />
        <FooterTitle>no</FooterTitle>
        <FooterAnchor href="https://github.com/yantavares/material-management-system-front">
          GitHub do projeto!
        </FooterAnchor>
      </TitleContainer>
      <DevsContainer>
        {devs.map((dev, index) => (
          <Dev key={index} name={dev.name} url={dev.url} />
        ))}
      </DevsContainer>
    </FooterContainer>
  );
};

export default Footer;
