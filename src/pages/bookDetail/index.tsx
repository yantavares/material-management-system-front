import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import unb from "../../assets/unb.png";

interface IEditedBook {
  isbn?: string;
  descricao?: string;
  data_aquisicao?: string;
  conservacao?: string;
  localizacao?: string;
  quantidade?: number;
  titulo?: string;
  url_capa?: string;
}

const BookDetail = () => {
  const [book, setBook] = useState<Book | null>(null);
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [editedBook, setEditedBook] = useState<IEditedBook>({});
  const [toggleFetch, setToggleFetch] = useState(false);
  const [authors, setAuthors] = useState<Autor[]>([]);
  const [descricao, setDescricao] = useState("");
  const [conservacao, setConservacao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [title, setTitle] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  const { isbn } = useParams<{ isbn: string }>();

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("userToken");

    if (!token) {
      console.error("No token found in session storage");
      return;
    }

    axios
      .put(`http://localhost:5005/book/${isbn}`, editedBook, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setEditedBook({});
        setEditMode(false);
        setToggleFetch(!toggleFetch);
      })
      .catch((error) => {
        console.error("Error editing book:", error);
      });
  };

  const RequestLoan = (e) => {
    const token = sessionStorage.getItem("userToken");

    if (!token) {
      console.error("No token found in session storage");
      return;
    }

    axios
      .post(
        `http://localhost:5005/loan/${isbn}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        alert(`Empréstimo solicitado com sucesso`);
      })
      .catch((error) => {
        console.error("Error requesting loan:", error);
        alert(
          `Houve um erro ao solicitar o empréstimo: ${error.response.data.error}`
        );
      });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");

    if (!token) {
      console.error("No token found in session storage");
      return;
    }

    axios
      .get(`http://localhost:5005/author/book/${isbn}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // setAuthors(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [authors]);

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
  }, [isbn, toggleFetch]);

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");

    if (!token) {
      console.error("No token found in session storage");
      return;
    }

    axios
      .get(`http://localhost:5005/category/book/${isbn}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book categories:", error);
      });
  }, [isbn, toggleFetch]);

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
        src={unb}
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
      <strong>Autores:</strong>
      {authors &&
        authors.map((author, index) => (
          <p key={index}>
            {author.sobrenome}, {author.nome}
          </p>
        ))}
      <strong>Categorias:</strong>
      {categories &&
        categories.map((category, index) => <p key={index}>{category.nome}</p>)}
      <p style={{ marginBottom: "10px" }}>
        <strong>Descrição:</strong> {book.descricao}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Data de aquisição:</strong>
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
      <button
        style={{ margin: "auto", marginBottom: "10px", display: "block" }}
        onClick={RequestLoan}
      >
        Solicitar Empréstimo
      </button>
      <div
        style={{
          display: "flex",
          width: "100%",
          placeItems: "center",
          placeContent: "center",
        }}
      >
        <button onClick={() => setEditMode(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
      {editMode && (
        <form>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="tit">Título</label>
            <input
              id="tit"
              type="text"
              value={title}
              placeholder={editedBook.titulo}
              onChange={(event) => {
                setTitle(event.target.value);
                setEditedBook({ ...editedBook, titulo: event.target.value });
              }}
            />
            <label htmlFor="desc">Descrição</label>
            <input
              id="desc"
              type="text"
              value={descricao}
              placeholder={editedBook.descricao}
              onChange={(event) => {
                setDescricao(event.target.value);
                setEditedBook({ ...editedBook, descricao: event.target.value });
              }}
            />
            <label htmlFor="con">Conservação</label>
            <input
              id="con"
              type="text"
              value={conservacao}
              placeholder={editedBook.conservacao}
              onChange={(event) => {
                setConservacao(event.target.value);
                setEditedBook({
                  ...editedBook,
                  conservacao: event.target.value,
                });
              }}
            />
            <label htmlFor="local">Local</label>
            <input
              type="text"
              id="local"
              placeholder="Local"
              value={localizacao}
              onChange={(event) => {
                setLocalizacao(event.target.value);
                setEditedBook({
                  ...editedBook,
                  localizacao: event.target.value,
                });
              }}
            />
            <label htmlFor="qtde">Quantidade</label>
            <input
              id="qtde"
              type="number"
              value={quantidade}
              placeholder={editedBook.quantidade?.toString()}
              onChange={(event) => {
                setQuantidade(Number(event.target.value));
                setEditedBook({
                  ...editedBook,
                  quantidade: Number(event.target.value),
                });
              }}
            />
            <button onClick={handleEditSubmit}>Salvar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
