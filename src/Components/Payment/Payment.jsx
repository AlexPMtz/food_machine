import React from 'react'
import { FaCoins, FaMoneyBill } from 'react-icons/fa'

const Payment = ({ handlePaymet }) => {

  let money = [10, 50, 100]
  
  return (
    <>
      <h5 className="card-title">Pago</h5>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <button 
              className="btn btn-outline-primary"
              onClick={ () => handlePaymet(money[0]) }
            >
              <FaCoins />
            </button>
          </div>
          <div className="col">
            <button 
              className="btn btn-outline-primary"
              onClick={ () => handlePaymet(money[1]) }
            >
              <FaMoneyBill />
            </button>
          </div>
          <div className="col">
            <button 
              className="btn btn-outline-primary"
              onClick={ () => handlePaymet(money[2]) }
            >
              <FaMoneyBill />
            </button>
          </div>
        </div>
        <div className="row">
          {
            money.map( element => (
              <div key={`_id: ${element}`} className="col">
                <span>${element}</span>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Payment