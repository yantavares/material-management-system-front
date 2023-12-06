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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
            navigate("/user?id=");
          }}
        >
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button
          onClick={() => {
            sessionStorage.removeItem("userToken");
            navigate("/?msg=exit");
          }}
        >
          Sair
        </button>
      </LoginContainer>
    </HeaderContainer>
  );
};

export default Header;
