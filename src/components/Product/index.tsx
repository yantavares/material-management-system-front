import React from "react";
import {
  ProductButton,
  ProductImageContainer,
  ProductName,
  WholeProduct,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Product = ({ name, info, image, id, type, showLoanButton = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "book") navigate(`/book/${id}`);
    else navigate(`/material/${id}`);
  };

  return (
    <WholeProduct>
      <ProductImageContainer>
        <ProductName>{name}</ProductName>
        <img src={image} alt={info} />
        <p>{info}</p>
        <ProductButton onClick={handleClick}>
          {<FontAwesomeIcon icon={faEye} />}
        </ProductButton>
        {showLoanButton && (
          <ProductButton onClick={() => {}}>Estender prazo</ProductButton>
        )}
      </ProductImageContainer>
    </WholeProduct>
  );
};
export default Product;
