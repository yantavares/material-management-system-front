import styled from "styled-components";

export const WholeProduct = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 30rem;
`;

export const ProductName = styled.h1`
  color: rgb(23, 23, 106);
  font-size: 1.5rem;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  height: 100%;
  background-color: #bbb;
  color: #000;
  width: 30%;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  height: 100%;
  background-color: #888;
  width: 70%;
`;
