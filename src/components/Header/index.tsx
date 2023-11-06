import React from "react";
import { HeaderContainer, HeaderTitle, Logo } from "./styles";
import UnB from "../../assets/unb.png";
import Footer from "../Footer";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <HeaderTitle>Empréstimo de Material</HeaderTitle>
        <Logo src={UnB} />
      </div>
      <div>
        <a href="">Login</a>
        <a href="">Registro</a>
      </div>
    </HeaderContainer>
  );
};

export default Header;
