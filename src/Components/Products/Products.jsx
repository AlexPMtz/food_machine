import React from 'react'
import { FaCookieBite, FaCoffee, FaPizzaSlice } from 'react-icons/fa'

const Products = ({handleProducts}) => {

  let products = [
    {
      productName: "cookie",
      price: 270
    },
    {
      productName: "coffe",
      price: 340
    },
    {
      productName: "pizza",
      price: 390
    }
  ]

  return (
    <>
      <h5 className="card-title">Productos</h5>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <button
              className="btn btn-outline-primary"
              onClick={ () => handleProducts(products[0]) }
            >
              <FaCookieBite />
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-primary"
              onClick={ () => handleProducts(products[1]) }
            >
              <FaCoffee />
            </button>
          </div>
          <div className="col">
            <button
              className="btn btn-outline-primary"
              onClick={ () => handleProducts(products[2]) }
            >
              <FaPizzaSlice />
            </button>
          </div>
        </div>
        <div className="row">
          {
            products.map(({ price }, index) => (
              <div key={`_id${index}`} className="col">
                <span>${price}</span>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Products