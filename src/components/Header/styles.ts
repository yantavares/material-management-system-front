import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: black;
  height: 5rem;
  position: relative;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 1.6rem;
`;

export const Logo = styled.img`
  height: 2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LoginContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const VerticalDivider = styled.div`
  height: 2rem;
  width: 1px;
  background-color: white;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  left: 43%;
`;

interface ButtonProps {
  $selectedButton: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 6rem;
  background-color: ${(props) =>
    props.$selectedButton ? "#292929" : "#0f0f0f"};
`;
