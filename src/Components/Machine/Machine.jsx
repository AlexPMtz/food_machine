import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Class from "./Machine.module.css";
import LocalStorage from "../../storage";
import Payment from "../Payment/Payment";
import Products from "../Products/Products";

const Machine = () => {
  let availableCoins = [100, 50, 10];
  let userName = LocalStorage.getItem("firstName");
  let navigate = useNavigate();
  const [didPay, setDidPay] = useState(false);
  const [operationAmount, setoperationAmount] = useState(0);
  const [product, setProduct] = useState(0);
  const [montoIngresado, setMontoIngresado] = useState({
    total: 0,
    100: 0,
    50: 0,
    10: 0,
  });
  let [cambio, setCambio] = useState({
    total: 0,
    100: 0,
    50: 0,
    10: 0,
  });

  const onOut = () => {
    LocalStorage.deleteItem("firstName");
    navigate("/");
  };

  const handleProducts = (product) => {
    setProduct(product);
  };

  const handlePaymet = (payment) => {
    setMontoIngresado({
      ...montoIngresado,
      [payment]: montoIngresado[payment] + 1,
      total: payment + montoIngresado.total,
    });
  };

  const pay = () => {
    let cambioRestante = montoIngresado.total - product.price;
    let amountChage = {
      total: cambioRestante,
      100: 0,
      50: 0,
      10: 0,
    };

    for (const coin of availableCoins) {
      if (cambioRestante >= coin) {
        amountChage[coin] = Math.trunc(cambioRestante / coin);
        cambioRestante = cambioRestante % coin;
        setoperationAmount(operationAmount + 1);
      }
    }
    setCambio(amountChage);
    let txs = LocalStorage.getItem("transactions") ?? [];
    txs.push({
      product,
      userName,
      payment: montoIngresado,
      change: amountChage,
    });
    LocalStorage.setItem("transactions", txs);
    setDidPay(true);
  };

  const resetBought = () => {
    setoperationAmount(0);
    setProduct(0);
    setMontoIngresado({
      total: 0,
      100: 0,
      50: 0,
      10: 0,
    });
    setCambio({
      total: 0,
      100: 0,
      50: 0,
      10: 0,
    });
    setDidPay(false);
  };

  return (
    <div className={Class.mainContainer}>
      <div className={"card mb-3 " + Class.container}>
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <h4 className="card-title">Bienvenido {userName}</h4>
          </div>
          {didPay ? (
            <>
            <br />
              <div className="row">
                <div className="col">
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Monto pagado:
                      <span className="badge bg-primary rounded-pill">
                        ${product?.price ?? 0}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Monto ingresado:
                      <span className="badge bg-primary rounded-pill">
                        ${montoIngresado.total}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Cambio entregado:
                      <span className="badge bg-primary rounded-pill">
                        ${cambio.total}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Operaciones realizadas para calular el cambio:
                      <span className="badge bg-primary rounded-pill">
                        {operationAmount}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col">
                  <span className="d-flex justify-content-center">
                    <b>Desglose de cambio</b>
                  </span>
                  <br />
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Billetes de 100:
                      <span className="badge bg-primary rounded-pill">
                        {cambio[100]}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Billetes de 50:
                      <span className="badge bg-primary rounded-pill">
                        {cambio[50]}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Monedas de 10:
                      <span className="badge bg-primary rounded-pill">
                        {cambio[10]}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              <Products handleProducts={handleProducts} />
              <Payment handlePaymet={handlePaymet} />
              <br />
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <span>Monto a pagar: ${product?.price ?? 0}</span>{" "}
                </div>
                <div className="col d-flex justify-content-center">
                  <span>Monto ingresado: ${montoIngresado.total}</span>
                </div>
              </div>
            </>
          )}
          {didPay ? (
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-outline-danger w-100 mt-3"
                onClick={resetBought}
              >
                Nueva compra
              </button>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-outline-danger w-100 mt-3"
                onClick={pay}
                disabled={product.price === undefined || montoIngresado.total < product.price}
              >
                Pagar
              </button>
            </div>
          )}

          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-primary w-100 mt-3"
              onClick={() => navigate(`/transactions/${userName}`)}
            >
              Historial de compras
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-primary w-100 mt-3"
              onClick={onOut}
            >
              Salir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Machine;
