import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Login from "./pages/login";
import Register from "./pages/register";

const HomePage = lazy(() => import("./pages/home"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
