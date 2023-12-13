import React, { useState, useEffect } from "react";
import axios from "axios";
import UnB from "../../assets/unb.png";
import { Button } from "../../components/Header/styles";
import { ButtonsContainer } from "./styles";
import Product from "../../components/Product";
import BookFilterComponent from "../../components/BookFilter";

const ProductsPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedButton, setSelectedButton] = useState("books");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");

    if (!token) {
      console.error("No token found in session storage");
      return;
    }

    if (selectedButton === "books") {
      axios
        .get("http://localhost:5005/book", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setBooks(response.data);
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
        });
    } else if (selectedButton === "materials") {
      axios
        .get("http://localhost:5005/material", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setMaterials(response.data);
        })
        .catch((error) => {
          console.error("Error fetching materials:", error);
        });
    }
  }, [selectedButton]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ButtonsContainer>
          <Button
            onClick={() => {
              setSelectedButton("books");
            }}
            $selectedButton={selectedButton === "books"}
          >
            Livros
          </Button>
          <Button
            onClick={() => {
              setSelectedButton("materials");
            }}
            $selectedButton={selectedButton === "materials"}
          >
            Materiais
          </Button>
        </ButtonsContainer>
        <ButtonsContainer>
          <Button
            onClick={() => {
              setShowFilters(!showFilters);
            }}
            style={{position: "relative"}}
            $selectedButton={selectedButton === "books"}
          >
            Filtros
          </Button>
        </ButtonsContainer>
        <BookFilterComponent show={showFilters} />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        {selectedButton === "books" &&
          books.map((book, index) => (
            <Product
              key={index}
              name={book.titulo}
              info={book.descricao}
              image={book.url_capa || UnB}
              id={book.isbn}
              type={"book"}
            />
          ))}
        {selectedButton === "materials" &&
          materials.map((material, index) => (
            <Product
              key={index}
              name={material.desc}
              info={material.serial}
              image={material.url_imagem || UnB}
              id={material.id}
              type={"material"}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
