import React, { useState, useEffect } from "react";

const FilterComponent = ({ show }) => {
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [authors, setAuthors] = useState<Autor[]>([]);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const token = sessionStorage.getItem("userToken");

  useEffect(() => {
    if (show) {
      // Make a GET request to the specified URL
      fetch("http://localhost:5005/category/book", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          setCategories(data); // Assuming the response is an array of categories

        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    }
  }, [show]);

  useEffect(() => {
    if (show) {
      // Make a GET request to the specified URL
      fetch("http://localhost:5005/author", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          setAuthors(data); // Assuming the response is an array of categories
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    }
  }, [show]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  };

  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        margin: "1rem",
        position: "absolute",
        right: "1rem",
        top: "9rem"
      }}
    >
     <div>
      <p>Categorias:</p>
      {/* Category Selection */}
      <input
        type="radio"
        name="all"
        id="all1"
        value={""}
        checked={selectedCategory === ""}
        onChange={handleCategoryChange}
      />
      <label htmlFor="all1">{"Todos"}</label>

      {categories?.map((category) => (
        <div key={category.id}>
          <input
            type="radio"
            id={`category_${category.id}`}
            name="categoria"
            value={category.id.toString()}
            checked={selectedCategory === category.id.toString()}
            onChange={handleCategoryChange}
          />
          <label htmlFor={`category_${category.id}`}>{category.nome}</label>
        </div>
      ))}
    </div>
    <div>
      <p>Autores:</p>
      {/* Author Selection */}
      <input
        type="radio"
        name="all2"
        id="all2"
        value={""}
        checked={selectedAuthor === ""}
        onChange={handleAuthorChange}
      />
      <label htmlFor="all2">{"Todos"}</label>

      {authors?.map((author) => (
        <div key={author.id}>
          <input
            type="radio"
            id={`author_${author.id}`}
            name="autor"
            value={author.id.toString()}
            checked={selectedAuthor === author.id.toString()}
            onChange={handleAuthorChange}
          />
          <label htmlFor={`author_${author.id}`}>{author.nome}</label>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default FilterComponent;
