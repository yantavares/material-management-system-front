import React, { useState, useEffect } from "react";
import axios from "axios";
import UnB from "../../assets/unb.png";
import Product from "../../components/Product";

const Loans = () => {
  const token = sessionStorage.getItem("userToken") || "";
  const userId = sessionStorage.getItem("userId");

  if (!token) {
    console.error("No token found in session storage");
    return;
  }
  const [loans, setLoans] = useState<any[]>([]);
  const [bookLoans, setBookLoans] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5005/loan/material", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setLoans(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5005/loan/book", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setBookLoans(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        {bookLoans &&
          bookLoans.map(
            (loan, index) =>
              loan.id_usuario === userId && (
                <Product
                  key={index}
                  name={loan.titulo}
                  info={loan.descricao}
                  image={loan.url_capa || UnB}
                  id={loan.isbn ? loan.isbn : loan.id}
                  type={"book"}
                  showLoanButton={true}
                  multa={loan.multa}
                />
              )
          )}
        {/* {loans &&
          loans.map(
            (loanMat, index) =>
              loanMat.id_usuario === userId && (
                <Product
                  key={index}
                  name={loanMat.desc}
                  info={loanMat.serial}
                  image={loanMat.url_capa || UnB}
                  id={loanMat.isbn ? loanMat.isbn : loanMat.id}
                  type={"book"}
                  showLoanButton={true}
                  multa={loanMat.multa}
                />
              )
          )} */}
      </div>
    </>
  );
};
export default Loans;
