import React from "react";

const FilterComponent = ({ show }) => {
  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        margin: "1rem",
      }}
    >
      <div>
        <p>Mostrar:</p>
        <input type="radio" id="todos" name="mostrar" value="Todos" />
        <label htmlFor="todos">Todos</label>
        <br />
        <input
          type="radio"
          id="emprestados"
          name="mostrar"
          value="Emprestados"
        />
        <label htmlFor="emprestados">Emprestados</label>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <label htmlFor="filtro-categoria">Categoria:</label>
        <select id="filtro-categoria">
          <option value="autor">Autor</option>
          <option value="categoria">Categoria</option>
        </select>
      </div>
    </div>
  );
};

export default FilterComponent;
