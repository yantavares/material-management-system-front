declare module "*.jpg";
declare module "*.png";

/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: {
    readonly [key: string]: string | boolean | undefined;
    // Add more specific typing here if needed
    // For example:
    VITE_API_URL: string;
  };
}

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

interface User {
  nome: string;
  sobrenome: string;
  funcao: string;
  email: string;
  senha: string;
  url_imagem: string;
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
