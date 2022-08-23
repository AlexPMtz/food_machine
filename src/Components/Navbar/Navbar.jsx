import React from 'react'
import { MdFastfood } from 'react-icons/md'
import Class from './Navbar.module.css'

const Navbar = () => {

  return (
    <nav className={"navbar fixed-top " + Class.color}>
      <div className="container-fluid justify-content-center">
        <MdFastfood className={ Class.fontStyleRight } />
        <h2 className="card-title">Food Machine</h2>
        <MdFastfood className={ Class.fontStyleLeft } />
      </div>
    </nav>
  )
}

export default Navbar