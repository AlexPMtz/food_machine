import React from 'react'
import { FaCoins, FaMoneyBill } from 'react-icons/fa'
const Payment = () => {
  return (
    <>
      <h5 className="card-title">Pago</h5>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-outline-primary"><FaCoins /></button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-primary"><FaMoneyBill /></button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-primary"><FaMoneyBill /></button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span>$10</span>
          </div>
          <div className="col">
            <span>$50</span>
          </div>
          <div className="col">
            <span>$100</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment