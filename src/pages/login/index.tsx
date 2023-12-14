import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const [msg, setMsg] = useState(queryParams.get("msg"));

  const URL_API = import.meta.env.VITE_URL_API ?? "http://localhost:5005";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchUserId = (email: string, token: string) => {
    if (!token) {
      console.error("No token found");
      return;
    }

    axios
      .get(`http://localhost:5005/user/${email}/email`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Authorization header
        },
      })
      .then((response) => {
        // Assuming the user ID is in the response
        const userId = response.data.id;
        const userRole = response.data.funcao;
        sessionStorage.setItem("userId", userId);
        sessionStorage.setItem("userRole", userRole);
      })
      .catch((error) => {
        console.error("Error fetching user ID:", error);
      });
  };

  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg("");
      }, 3000); // Clear msg after 5 seconds
    }
  }, [msg]);

  const handleClick = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Por favor, preencha todos os campos!");
      return;
    }

    axios
      .post(`${URL_API}/sign-in`, {
        email: email,
        senha: password,
      })
      .then((response) => {
        if (response.data.token) {
          sessionStorage.setItem("userToken", response.data.token);

          fetchUserId(email, response.data.token);
          navigate(`/home?${response.data.token}`);
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
        {/* <button onClick={() => navigate("/home")}>
          <FontAwesomeIcon icon={faHouse} />
        </button> */}

        <h3 style={{ height: "fit-content", margin: 0 }}>
          {msg === "exit" && "Você saiu da sua conta com sucesso!"}
        </h3>

        <h2 style={{ height: "fit-content", margin: 0 }}> {errorMessage}</h2>

        <form className="form">
          <p className="form-title">Logar na sua conta</p>
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
          <button className="submit" type="submit" onClick={handleClick}>
            Entrar
          </button>

          <p className="signup-link">
            Não possui conta?
            <a
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Registrar
            </a>
          </p>
        </form>
      </div>
    </>
  );
};
export default Login;
