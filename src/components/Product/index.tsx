import React from "react";
import {
  ProductButton,
  ProductImageContainer,
  ProductInfoContainer,
  ProductName,
  WholeProduct,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Product = ({ name, info, image }) => {
  return (
    <WholeProduct>
      <ProductImageContainer>
        <ProductName>{name}</ProductName>
        <img src={image} alt={info} />
        <ProductButton>{<FontAwesomeIcon icon={faEye} />}</ProductButton>
      </ProductImageContainer>
    </WholeProduct>
  );
};
export default Product;
