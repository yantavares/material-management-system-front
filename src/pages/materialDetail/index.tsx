import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MaterialDetail = () => {
  const [material, setMaterial] = useState<Material | null>(null);
  const { id } = useParams<{ id: string }>();

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
      })
      .catch((error) => {
        console.error("Error fetching material details:", error);
      });
  }, [id]);

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
    </div>
  );
};

export default MaterialDetail;
