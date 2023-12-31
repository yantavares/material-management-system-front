import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 30rem;
  margin: 3% 0;
  gap: 1rem;
`;

export const AboutSubtitle = styled.i`
  align-self: flex-start;
  color: darkblue;
  margin: 0;
  padding: 0;
`;

export const AboutImage = styled.img`
  height: 22%;
  position: absolute;
  bottom: 5%;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: #bbb;
  color: #000;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  width: 40%;
  padding: 1.5rem;
  height: 30rem;
`;

export const VerticalDivider = styled.div`
  border-left: 2px solid #aaa;
  height: 100%;
`;

export const AboutTextSection = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
`;

export const AboutText = styled.p`
  align-self: flex-start;
  text-align: justify;
  font-size: 1.1rem;
  overflow-y: auto;
`;

export const AboutTextTitle = styled.h1`
  font-size: 1.5rem;
  color: rgb(23, 23, 106);
  text-decoration: underline #bbb;
`;
