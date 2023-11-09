import React from "react";
import {
  ProductImageContainer,
  ProductInfoContainer,
  ProductName,
  WholeProduct,
} from "./styles";
import unb from "../../assets/unb.png";

const Product = ({ name, info }) => {
  return (
    <WholeProduct>
      <ProductImageContainer>
        <ProductName>{name}</ProductName>
        <img src={unb} alt={info} />
      </ProductImageContainer>
      <ProductInfoContainer>{info}</ProductInfoContainer>
    </WholeProduct>
  );
};
export default Product;
