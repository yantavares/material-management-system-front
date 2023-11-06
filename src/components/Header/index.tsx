import React from "react";
import {
  ButtonsContainer,
  HeaderContainer,
  HeaderTitle,
  Logo,
  TitleContainer,
  VerticalDivider,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <HeaderTitle>Empréstimo de Material</HeaderTitle>
        <VerticalDivider />
        <h2>UnB</h2>
      </TitleContainer>

      <ButtonsContainer>
        <button>Login</button>
        <button>Registro</button>
      </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
