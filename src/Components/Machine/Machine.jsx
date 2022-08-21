import React from 'react'
import Class from './Machine.module.css'
import LocalStorage from '../../storage'
import Payment from './Payment/Payment'
import Products from './Products/Products'

const Machine = ({ formFilled, done }) => {

  let userName = LocalStorage.getItem('firstName')

  const onOut = () => {
    LocalStorage.deleteItem('firstName')
  }

  return (
    <div className={Class.mainContainer}>
      <div className={"card mb-3 " + Class.container}>
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <h4 className="card-title">Bienvenido {userName}</h4>
          </div>
          <Products />
          <Payment />
          <div className="row">
            <div className="col">
              <span>Monto a pagar: </span>
            </div>
            <div className="col">
            <span>Monto a ingresado: </span>
            </div>
          </div>
        </div>
      </div>

      <button
        className="btn btn-primary"
        onClick={onOut}
      >
        Salir
      </button>
    </div>
  )
}

export default Machine