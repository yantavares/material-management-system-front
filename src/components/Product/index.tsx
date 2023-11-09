import React from "react";
import {
  ProductImageContainer,
  ProductInfoContainer,
  ProductName,
  WholeProduct,
} from "./styles";

const Product = ({ name, info, image }) => {
  return (
    <WholeProduct>
      <ProductImageContainer>
        <ProductName>{name}</ProductName>
        <img src={image} alt={info} />
      </ProductImageContainer>
      <ProductInfoContainer>{info}</ProductInfoContainer>
    </WholeProduct>
  );
};
export default Product;
