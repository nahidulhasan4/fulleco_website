import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { EcommarceNavber } from '../Navber'
import Footer from '../Footer'

const Rootlayout = () => {
  return (
    <>
    <Header/>
    <EcommarceNavber />
    <Outlet />
    <Footer/>
    </>
  )
}

export default Rootlayout