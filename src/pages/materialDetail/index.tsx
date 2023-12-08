import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface IUpdateMaterial {
  id?: number;
  id_categoria_material?: number;
  desc?: string;
  serial?: string;
  conservacao?: string;
  localizacao?: string;
  quantidade?: number;
}

const MaterialDetail = () => {
  const [material, setMaterial] = useState<Material | null>(null);
  const [editMode, setEditMode] = useState(false);
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [editedMaterial, setEditedMaterial] = useState<IUpdateMaterial>({
    id_categoria_material: material?.id_categoria_material,
  });

  const [desc, setDesc] = useState("");
  const [serial, setSerial] = useState("");
  const [conservacao, setConservacao] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [toggleFetch, setToggleFetch] = useState(false);

  const { id } = useParams<{ id: string }>();

  const handleEditSubmit = () => {
    const token = sessionStorage.getItem("userToken");

    if (!token) {
      console.error("No token found in session storage");
      return;
    }

    axios
      .put(`http://localhost:5005/material/${id}`, editedMaterial, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        setEditedMaterial({
          id_categoria_material: material?.id_categoria_material,
        });
        setEditMode(false);
        setToggleFetch(!toggleFetch);
      })
      .catch((error) => {
        console.error("Error editing material:", error);
      });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");

    if (!token) {
      console.error("No token found in session storage");
      return;
    }

    axios
      .get(`http://localhost:5005/material/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMaterial(response.data);
        setEditedMaterial({
          id_categoria_material: response.data.id_categoria_material,
        });
      })
      .catch((error) => {
        console.error("Error fetching material details:", error);
      });
  }, [id, toggleFetch]);

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");

    if (!token) {
      console.error("No token found in session storage");
      return;
    }

    axios
      .get(`http://localhost:5005/category/material/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching material categories:", error);
      });
  }, [id, toggleFetch]);

  if (!material) return <div>Loading...</div>;

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
        {material.desc}
      </h1>
      <img
        src={material.url_imagem}
        alt={material.desc}
        style={{
          display: "block",
          maxWidth: "100%",
          height: "auto",
          margin: "0 auto 20px",
        }}
      />
      <p style={{ marginBottom: "10px" }}>
        <strong>ID:</strong> {material.id}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Categorias:</strong>
        {categories.map((cat, index) => (
          <p key={index}>{cat.nome}</p>
        ))}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Serial:</strong> {material.serial}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Data de aquisição:</strong>
        {new Date(material.data_Aquisicao).toLocaleDateString()}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Condição:</strong> {material.conservacao}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Local:</strong> {material.localizacao}
      </p>
      <p style={{ marginBottom: "10px" }}>
        <strong>Quantidade:</strong> {material.quantidade}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button onClick={() => setEditMode(true)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
      {editMode && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleEditSubmit();
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="desc">Descrição</label>
            <input
              type="text"
              id="desc"
              name="desc"
              value={desc}
              placeholder={material.desc}
              onChange={(event) => {
                setDesc(event.target.value);

                setEditedMaterial({
                  ...editedMaterial,
                  desc: event.target.value,
                });
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="serial">Serial</label>
            <input
              type="text"
              id="serial"
              name="serial"
              placeholder={material.serial}
              value={serial}
              onChange={(event) => {
                setSerial(event.target.value);

                setEditedMaterial({
                  ...editedMaterial,
                  serial: event.target.value,
                });
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="conservacao">Condição</label>
            <input
              type="text"
              id="conservacao"
              name="conservacao"
              placeholder={material.conservacao}
              value={conservacao}
              onChange={(event) => {
                setConservacao(event.target.value);
                setEditedMaterial({
                  ...editedMaterial,
                  conservacao: event.target.value,
                });
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="localizacao">Localização</label>
            <input
              type="text"
              id="localizacao"
              name="localizacao"
              placeholder={material.localizacao}
              value={localizacao}
              onChange={(event) => {
                setLocalizacao(event.target.value);
                setEditedMaterial({
                  ...editedMaterial,
                  localizacao: event.target.value,
                });
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              id="quantidade"
              name="quantidade"
              value={quantidade}
              placeholder={material.quantidade.toString()}
              onChange={(event) => {
                setQuantidade(Number(event.target.value));
                setEditedMaterial({
                  ...editedMaterial,
                  quantidade: Number(event.target.value),
                });
              }}
            />
          </div>
          <button type="submit">Salvar</button>
        </form>
      )}
    </div>
  );
};

export default MaterialDetail;
