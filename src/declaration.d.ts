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
