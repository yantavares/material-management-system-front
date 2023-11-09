import React from "react";
import { Container, ProductsContainer } from "./styles";
import Product from "../../components/Product";
import unb from "../../assets/unb.png";

const products = [
  {
    name: "Produto 1",
    info: "Informações sobre o produto 1",
    image: unb,
  },
  {
    name: "Produto 2",
    info: "Informações sobre o produto 2",
    image: unb,
  },
  {
    name: "Produto 3",
    info: "Informações sobre o produto 3",
    image: unb,
  },
  {
    name: "Produto 4",
    info: "Informações sobre o produto 4",
    image: unb,
  },
  {
    name: "Produto 5",
    info: "Informações sobre o produto 5",
    image: unb,
  },
];

const ProductsPage = () => {
  return (
    <Container>
      <ProductsContainer>
        {products.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            info={product.info}
            image={product.image}
          />
        ))}
      </ProductsContainer>
    </Container>
  );
};
export default ProductsPage;
