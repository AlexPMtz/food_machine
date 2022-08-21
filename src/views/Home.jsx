import React from 'react'
import WithCommonMenus from '../HOC/WithCommonMenus'
import Name from '../Components/Name/Name'
import Machine from '../Components/Machine/Machine'
import LocalStorage from '../storage'

const Home = () => {

  let userName = LocalStorage.getItem('firstName')

  // useEffect(() => {
  //   userName = LocalStorage.getItem('firstName')
  // })

  return (
    <>
      {
        userName ? <Machine /> : <Name />
      }
    </>
  )
}

export default WithCommonMenus(Home)