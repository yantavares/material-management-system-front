import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import About from "../about";
import Products from "../productsPage";

function App() {
  const [selectedButton, setSelectedButton] = useState("about");

  return (
    <>
      <Header
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      {selectedButton === "about" && <About />}
      {selectedButton === "products" && <Products />}
      <Footer />
    </>
  );
}

export default App;
