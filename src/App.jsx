import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Login from "./pages/login";
import Register from "./pages/register";
import User from "./pages/user";

const HomePage = lazy(() => import("./pages/home"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
