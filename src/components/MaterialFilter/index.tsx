import React, { useState, useEffect } from "react";

const MaterialFilterComponent = ({ show, selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState<Categoria[]>([]);

  const token = sessionStorage.getItem("userToken");

  useEffect(() => {
    if (show) {
      // Make a GET request to the specified URL
      fetch("http://localhost:5005/category/material", {
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



  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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
      <input
          type="radio"
          name="all"
          id="all1"
          value={"all"}
          checked={selectedCategory === "all"}
          onChange={handleCategoryChange}
          defaultChecked
        />
        <label htmlFor={"all1"}>{"Todos"}</label>

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

    </div>
  
  );
};

export default MaterialFilterComponent;
