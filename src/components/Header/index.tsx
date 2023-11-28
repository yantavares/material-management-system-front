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
import { useNavigate } from "react-router-dom";

const Header = ({ selectedButton, setSelectedButton }) => {
  const navigate = useNavigate();
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
            setSelectedButton("about");
          }}
          $selectedButton={selectedButton === "about"}
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
        <button
          onClick={() => {
            sessionStorage.removeItem("userToken");
            navigate("/?msg=exit");
          }}
        >
          Sair
        </button>
        <button onClick={() => navigate("/register")}>Registro</button>
      </LoginContainer>
    </HeaderContainer>
  );
};

export default Header;
