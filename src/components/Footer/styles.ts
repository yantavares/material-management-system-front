import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  height: 6rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 2rem;
`;
export const FooterTitle = styled.h4`
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0;
`;
export const Logo = styled.img`
  height: 2rem;
`;

export const FooterAnchor = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const DevsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const VerticalDivider = styled.div`
  height: 2rem;
  width: 1px;
  background-color: white;
`;
