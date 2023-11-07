import React from "react";
import {
  LoginContainer,
  HeaderContainer,
  HeaderTitle,
  ButtonsContainer,
  TitleContainer,
  VerticalDivider,
  Button,
} from "./styles";

const Header = ({ selectedButton, setSelectedButton }) => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <HeaderTitle>Empréstimo de Material</HeaderTitle>
        <VerticalDivider />
        <h2>UnB</h2>
      </TitleContainer>

      <ButtonsContainer>
        <Button
          onClick={() => {
            setSelectedButton("home");
          }}
          $selectedButton={selectedButton === "home"}
        >
          Sobre
        </Button>
        <Button
          onClick={() => {
            setSelectedButton("products");
          }}
          $selectedButton={selectedButton === "products"}
        >
          Produtos
        </Button>
      </ButtonsContainer>

      <LoginContainer>
        <button>Login</button>
        <button>Registro</button>
      </LoginContainer>
    </HeaderContainer>
  );
};

export default Header;
