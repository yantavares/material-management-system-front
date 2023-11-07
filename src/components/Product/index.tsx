import React from "react";
import { ProductContainer } from "./styles";
import unb from "../../assets/unb.png";

const Product = ({ name, info }) => {
  return (
    <ProductContainer>
      <h2>{name}</h2>
      <img src={unb} alt={info} />
      <p>{info}</p>
    </ProductContainer>
  );
};
export default Product;
