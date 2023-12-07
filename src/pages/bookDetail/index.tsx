import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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

const BookDetail = () => {
  const [book, setBook] = useState<Book | null>(null);
  const { isbn } = useParams<{ isbn: string }>();

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");

    if (!token) {
      console.error("No token found in session storage");
      return;
    }

    axios
      .get(`http://localhost:5005/book/${isbn}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [isbn]);

  if (!book) return <div>Loading...</div>;

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "20px auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        {book.titulo}
      </h1>
      <img
        src={book.url_capa}
        alt={book.titulo}
        style={{
          display: "block",
          maxWidth: "100%",
          height: "auto",
          margin: "0 auto 20px",
        }}
      />
      <p style={{ marginBottom: "10px" }}>
        <strong>ISBN:</strong> {book.isbn}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Descrição:</strong> {book.descricao}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Data de aquisição:</strong>{" "}
        {new Date(book.data_aquisicao).toLocaleDateString()}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Condição:</strong> {book.conservacao}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Local:</strong> {book.localizacao}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Quantidade:</strong> {book.quantidade}
      </p>
    </div>
  );
};

export default BookDetail;
