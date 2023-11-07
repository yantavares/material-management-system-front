import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./pages/productsPage";

function App() {
  const [selectedButton, setSelectedButton] = useState("home");

  return (
    <>
      <Header
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <Products />
      <Footer />
    </>
  );
}

export default App;
