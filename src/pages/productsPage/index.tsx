import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "../../components/product";
import UnB from "../../assets/unb.png";
import { Button } from "../../components/Header/styles";
import { ButtonsContainer } from "./styles";

interface Book {
  isbn: string;
  descricao: string;
  data_aquisicao: string;
  conservacao: string;
  localizacao: string;
  quantidade: number;
  titulo: string;
  url_capa: string;
}

interface Material {
  id: number;
  desc: string;
  data_Aquisicao: string;
  conservacao: string;
  localizacao: string;
  quantidade: number;
  serial: string;
  url_imagem: string;
  id_categoria_material: number;
}

const ProductsPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [selectedButton, setSelectedButton] = useState("books");

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
              image={UnB}
            />
          ))}
        {selectedButton === "materials" &&
          materials.map((material, index) => (
            <Product
              key={index}
              name={material.desc}
              info={material.serial}
              image={UnB}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
