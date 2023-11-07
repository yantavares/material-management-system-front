import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./pages/productsPage";
import Home from "./pages/home";

function App() {
  const [selectedButton, setSelectedButton] = useState("home");

  return (
    <>
      <Header
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      {selectedButton === "home" && <Home />}
      {selectedButton === "products" && <Products />}
      <Footer />
    </>
  );
}

export default App;
