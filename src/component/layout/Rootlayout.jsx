import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import {EcommarcNavber} from '../Navber'

const Rootlayout = () => {
  return (
    <>
    <Header/>
    <EcommarcNavber />
    <Outlet />
    <Footer/>
    </>
  )
}

export default Rootlayout