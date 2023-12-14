import React, { useState, useEffect } from "react";
import axios from "axios";
import UnB from "../../assets/unb.png";
import Product from "../../components/Product";

const Loans = () => {
  const token = sessionStorage.getItem("userToken");

  if (!token) {
    console.error("No token found in session storage");
    return;
  }
  const [loans, setLoans] = useState<Loan[]>([]);
 
  useEffect(() => {
    axios
    .get("http://localhost:5005/loan", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      setLoans(response.data);
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
    });
  },[])
  return <> 
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {loans && loans.map((loan, index) => (
        <Product
          key={index}
          name={loan.titulo}
          info={loan.descricao}
          image={loan.url_capa || UnB}
          id={loan.isbn ? loan.isbn : loan.id }
          type={"book"}
        />
      ))}
    </div>
  </>;
};
export default Loans;
