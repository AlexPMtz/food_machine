import React from 'react'
import WithCommonMenus from '../../HOC/WithCommonMenus'
import Name from '../../Components/Name/Name'

const Home = () => {
  return (
    <Name />
  )
}

export default WithCommonMenus(Home)