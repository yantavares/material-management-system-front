import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 4rem;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-bottom: 5rem;
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
  padding: 1rem;
`;

export const ButtonsContainer = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  display: flex;
  gap: 1rem;
`;

const FilterContainer = styled.div`
  background: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const FilterTitle = styled.h4`
  margin-bottom: 15px;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-left: 10px;
    font-size: 14px;
  }
`;

const Dropdown = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
