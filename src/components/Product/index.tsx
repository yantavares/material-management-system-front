import React from "react";
import {
  ProductButton,
  ProductImageContainer,
  ProductName,
  WholeProduct,
} from "./styles";
import unb from "../../assets/unb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Product = ({
  name,
  info,
  image,
  id,
  type,
  showLoanButton = false,
  multa = null,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type === "book") navigate(`/book/${id}`);
    else navigate(`/material/${id}`);
  };

  return (
    <WholeProduct height={multa || multa == 0 ? "35rem" : "28rem"}>
      <ProductImageContainer>
        <ProductName>{name}</ProductName>
        <div style={{ width: "100%", justifyContent: "center" }}>
          <img src={unb} alt={info} width="70%" />
        </div>
        <p>{info}</p>
        {multa && <p>multa: {multa}</p>}
        <ProductButton onClick={handleClick}>
          {<FontAwesomeIcon icon={faEye} />}
        </ProductButton>
        {showLoanButton && (
          <div
            style={{
              display: "flex",
              gap: "2rem",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <ProductButton onClick={() => {}}>Estender prazo</ProductButton>
          </div>
        )}
      </ProductImageContainer>
    </WholeProduct>
  );
};
export default Product;
