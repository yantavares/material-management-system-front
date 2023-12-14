import React, { ChangeEvent, useState } from "react";

const BookForm = ({ showToggle }) => {
  const [bookData, setBookData] = useState({
    descricao: "",
    data_aquisicao: "",
    conservacao: "",
    localizacao: "",
    quantidade: "",
    titulo: "",
    url_capa: "",
    id_categoria_livro: "",
    autores: [],
    categorias: [],
  });

  // Fake authors and categories
  const fakeAuthors = ["Autor 1", "Autor 2", "Autor 3"];
  const fakeCategories = ["Categoria 1", "Categoria 2", "Categoria 3"];

  const handleInputChange = (e) => {
    setBookData({ ...bookData, [e.target.name]: e.target.value });
  };

  const handleMultiSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setBookData({
      ...bookData,
      [e.target.name]: Array.from(
        e.target.selectedOptions,
        (option) => option.value
      ),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showToggle();
    console.log(bookData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "300px",
      }}
    >
      <label>
        Descrição:
        <input
          type="text"
          name="descricao"
          value={bookData.descricao}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Data de Aquisição:
        <input
          type="date"
          name="data_aquisicao"
          value={bookData.data_aquisicao}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Conservação:
        <input
          type="text"
          name="conservacao"
          value={bookData.conservacao}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Localização:
        <input
          type="text"
          name="localizacao"
          value={bookData.localizacao}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Quantidade:
        <input
          type="number"
          name="quantidade"
          value={bookData.quantidade}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Título:
        <input
          type="text"
          name="titulo"
          value={bookData.titulo}
          onChange={handleInputChange}
        />
      </label>
      <label>
        URL da Capa:
        <input
          type="text"
          name="url_capa"
          value={bookData.url_capa}
          onChange={handleInputChange}
        />
      </label>

      <label>
        Autores:
        <select
          multiple
          name="autores"
          value={bookData.autores}
          onChange={handleMultiSelectChange}
          style={{ height: "100px" }}
        >
          {fakeAuthors.map((author, index) => (
            <option key={index} value={author}>
              {author}
            </option>
          ))}
        </select>
      </label>
      <label>
        Categorias:
        <select
          multiple
          name="categorias"
          value={bookData.categorias}
          onChange={handleMultiSelectChange}
          style={{ height: "100px" }}
        >
          {fakeCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default BookForm;
