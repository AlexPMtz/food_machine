import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Class from './Machine.module.css'
import LocalStorage from '../../storage'
import Payment from '../Payment/Payment'
import Products from '../Products/Products'

const Machine = () => {

  let userName = LocalStorage.getItem('firstName');
  let navigate = useNavigate();
  let [montoIngresado, setMontoIngresado] = useState(0)
  let [montoAPagar, setMontoAPagar] = useState(0)
  let [transaccion, settransaccion] = useState([])
  let [cambio, setCambio] = useState(0)

  const onOut = () => {
    LocalStorage.deleteItem('firstName');
    navigate("/")
  }

  const handleProducts = (product) => {
    settransaccion(product)
    setMontoAPagar(montoAPagar += product.price)
  }

  const handlePaymet = (payment) => {
    setMontoIngresado(montoIngresado += payment)
  }

  const pay = () => {
    setCambio(montoIngresado - montoAPagar)
    if( montoIngresado > montoAPagar){

    }
  }

  return (
    <div className={Class.mainContainer}>
      <div className={"card mb-3 " + Class.container}>
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <h4 className="card-title">Bienvenido {userName}</h4>
          </div>
          <Products handleProducts={ handleProducts } />
          <Payment handlePaymet={ handlePaymet } />
          <br />
          <div className="row">
            <div className="col d-flex justify-content-center">
              <span>Monto a pagar: ${montoAPagar}</span>
            </div>
            <div className="col d-flex justify-content-center">
              <span>Monto ingresado: ${montoIngresado}</span>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-danger w-100 mt-3">Pagar</button>
          </div>
          <div className="d-flex justify-content-center">      
            <button className="btn btn-outline-primary w-100 mt-3" onClick={onOut}>Salir</button>
          </div>              
        </div>
      </div>
    </div>
  )
}

export default Machine