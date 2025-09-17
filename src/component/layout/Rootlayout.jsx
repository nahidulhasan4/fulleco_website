import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { EcomarceNavber } from '../Navber'
import Footer from '../Footer'

const Rootlayout = () => {
  return (
    <>
    <Header/>
    <EcomarceNavber/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Rootlayout