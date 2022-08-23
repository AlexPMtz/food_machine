import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Class from './Ticket.module.css'
import LocalStorage from "../../storage";

const Ticket = () => {

  const { userName } = useParams();
  const [txs, setTxs] = useState([]);
  let navigate = useNavigate()

  useEffect(() => {
    let txsFiltered = LocalStorage.getItem("transactions") ?? [];

    setTxs(
      txsFiltered.filter(
        (element) => userName.toLowerCase() === element.userName.toLowerCase()
      )
    );
  }, []);

  console.log("--->", txs);

  return (
    <>
      <div className={Class.mainContainer}>
        <div className={"card mb-3 " + Class.container}>
          <div className="card-body">
            <h5 className="card-title">Compras del usuario {userName}</h5>
            <br />
            <table className="table">
              <thead className="table table-striped">
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Pago</th>
                  <th>Cambio</th>
                </tr>
              </thead>
              <tbody>
                {
                  txs.map(({ change, payment, product }, count = 0) => (
                    <tr key={`_id: ${product.productName}`}>
                      <th scope='row'>{ count + 1 }</th>
                      <td>{product.productName}</td>
                      <td>${product.price}</td>
                      <td>${payment.total}</td>
                      <td>${change.total}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <br />
            <button
              className="btn btn-outline-primary w-100 mt-3"
              onClick={() => navigate("/foodMachine")}
            >
              Seguir comprando
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
