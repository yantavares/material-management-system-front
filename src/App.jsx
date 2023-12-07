import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import User from "./pages/user";
import BookDetail from "./pages/bookDetail";
import MaterialDetail from "./pages/materialDetail";

const HomePage = React.lazy(() => import("./pages/home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/book/:isbn" element={<BookDetail />} />
          <Route path="/material/:id" element={<MaterialDetail />} />
          <Route path="/user" element={<User />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
