import React, { useState } from "react";
import "../login/styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const URL_API = import.meta.env.VITE_URL_API ?? "http://localhost:5005";
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [job, setJob] = useState("Usuário");
  const [errorMessage, setErrorMessage] = useState("");
  const handleClick = (e) => {
    e.preventDefault();

    if (!email || !password || !job || !name || !lastName || job === "Função") {
      setErrorMessage("Por favor, preencha todos os campos!");
      return;
    }

    axios
      .post(`${URL_API}/sign-up`, {
        nome: name,
        sobrenome: lastName,
        funcao: job,
        email: email,
        senha: password,
        url_imagem: "teste",
      })
      .then((response) => {
        if (response.data === "Created") {
          navigate("/?msg=success");
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
        console.error(err);
      });
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
          gap: "1rem",
        }}
      >
        <h2>{errorMessage}</h2>
        {/* <button onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faHouse} />
        </button> */}

        <form className="form">
          <p className="form-title">Registro</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="input-container-small">
              <input
                className="input"
                placeholder="Seu nome"
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span>
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
            </div>
            <div className="input-container-small">
              <input
                className="input"
                placeholder="Seu sobrenome"
                type="name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <span>
                <svg
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="input-container">
            <input
              className="input"
              placeholder="Seu e-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span>
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
          </div>
          <div className="input-container">
            <input
              className="input"
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <span>
              <svg
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                ></path>
              </svg>
            </span>
          </div>
          <div
            style={{
              backgroundColor: "#FFF",
              height: "3rem",
              margin: "1rem 0",
              borderRadius: "0.4rem",
            }}
          >
            <select
              style={{
                backgroundColor: "#FFF",
                height: "100%",
                color: "black",
                width: "100%",
                borderRadius: "0.4rem",
                padding: "0.5rem",
              }}
              value={job}
              onChange={(e) => setJob(e.target.value)}
              required
            >
              <option value="">Função</option>
              <option value="usuario">Usuario</option>
              <option value="chefe de laboratório">Chefe de laboratório</option>
              <option value="administrador">Administrador</option>
            </select>
          </div>
          <button onClick={handleClick} className="submit" type="submit">
            Registrar
          </button>

          <p className="signup-link">
            Já possui conta?
            <a style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
              Logar
            </a>
          </p>
        </form>
      </div>
    </>
  );
};
export default Register;
