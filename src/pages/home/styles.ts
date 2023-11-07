import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  background-color: gray;
  gap: 1rem;
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  width: 80%;
  padding: 1rem;
  margin: 3% 10%;
  height: 30rem;
`;

export const VerticalDivider = styled.div`
  border-left: 1px solid lightgray;
  height: 100%;
`;

export const HomeTextSection = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-items: center;
`;

export const HomeText = styled.p`
  text-align: justify;
`;
