import React, { useState, ChangeEvent } from "react";

interface IMaterialData {
  desc: string;
  data_Aquisicao: string;
  conservacao: string;
  localizacao: string;
  quantidade: number | "";
  serial: string;
  url_imagem: string;
  categoria: string;
}

const MaterialForm = ({ showToggle }) => {
  const [materialData, setMaterialData] = useState<IMaterialData>({
    desc: "",
    data_Aquisicao: "",
    conservacao: "",
    localizacao: "",
    quantidade: "",
    serial: "",
    url_imagem: "",
    categoria: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setMaterialData({ ...materialData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToggle();
    console.log(materialData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Descrição:
        <input
          type="text"
          name="desc"
          value={materialData.desc}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Data de Aquisição:
        <input
          type="datetime-local"
          name="data_Aquisicao"
          value={materialData.data_Aquisicao}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Conservação:
        <input
          type="text"
          name="conservacao"
          value={materialData.conservacao}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Localização:
        <input
          type="text"
          name="localizacao"
          value={materialData.localizacao}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Quantidade:
        <input
          type="number"
          name="quantidade"
          value={materialData.quantidade}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Serial:
        <input
          type="text"
          name="serial"
          value={materialData.serial}
          onChange={handleInputChange}
        />
      </label>
      <label>
        URL da Imagem:
        <input
          type="text"
          name="url_imagem"
          value={materialData.url_imagem}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Categoria:
        <select
          name="categoria"
          value={materialData.categoria}
          onChange={handleInputChange}
        >
          {/* Replace these options with actual category data */}
          <option value="">Selecione uma categoria</option>
          <option value="categoria1">Categoria 1</option>
          <option value="categoria2">Categoria 2</option>
          {/* ...other categories */}
        </select>
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default MaterialForm;
