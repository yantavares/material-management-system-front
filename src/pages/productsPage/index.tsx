import React from "react";
import { Container, ProductsContainer } from "./styles";
import Product from "../../components/Product";

const products = [
  {
    name: "Produto 1",
    info: "Informações sobre o produto 1",
  },
  {
    name: "Produto 2",
    info: "Informações sobre o produto 2",
  },
  {
    name: "Produto 3",
    info: "Informações sobre o produto 3",
  },
  {
    name: "Produto 4",
    info: "Informações sobre o produto 4",
  },
  {
    name: "Produto 5",
    info: "Informações sobre o produto 5",
  },
  {
    name: "Produto 6",
    info: "Informações sobre o produto 6",
  },
];

const ProductsPage = () => {
  return (
    <Container>
      <ProductsContainer>
        {products.map((product, index) => (
          <Product key={index} name={product.name} info={product.info} />
        ))}
      </ProductsContainer>
    </Container>
  );
};
export default ProductsPage;
