import React from 'react'
import { FaCookieBite, FaCoffee, FaPizzaSlice } from 'react-icons/fa'

const Products = () => {
  return (
    <>
      <h5 className="card-title">Productos</h5>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <button type="button" className="btn btn-outline-primary"><FaCookieBite /></button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-primary"><FaCoffee /></button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-outline-primary"><FaPizzaSlice /></button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span>$270</span>
          </div>
          <div className="col">
            <span>$340</span>
          </div>
          <div className="col">
            <span>$390</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products