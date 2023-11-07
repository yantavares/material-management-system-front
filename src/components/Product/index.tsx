import React from "react";
import {
  ProductImageContainer,
  ProductInfoContainer,
  WholeProduct,
} from "./styles";
import unb from "../../assets/unb.png";

const Product = ({ name, info }) => {
  return (
    <WholeProduct>
      <ProductImageContainer>
        <h2>{name}</h2>
        <img src={unb} alt={info} />
      </ProductImageContainer>
      <ProductInfoContainer>{info}</ProductInfoContainer>
    </WholeProduct>
  );
};
export default Product;
