import React from 'react'
import Styles from './WithCommonMenus.module.css';
import Navbar from '../Components/Navbar/Navbar'

export default function WithCommonMenus(Component){

  const CommonComponents = (props) => {
    return (
      <div className={Styles.mainContainer}>
        <Navbar />
        <div className={Styles.componentContainer}>
          <Component {...props} />
        </div>
      </div>
    )
  }
  return CommonComponents
}