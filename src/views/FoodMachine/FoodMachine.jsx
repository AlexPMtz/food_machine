import React from 'react'
import WithCommonMenus from '../../HOC/WithCommonMenus'
import Machine from '../../Components/Machine/Machine'

const FoodMachine = () => {
  return (
    <Machine />
  )
}

export default WithCommonMenus(FoodMachine)