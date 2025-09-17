import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import Navber from '../Navber'

const Rootlayout = () => {
  return (
    <>
    <Header/>
    <Navber />
    <Outlet />
    <Footer/>
    </>
  )
}

export default Rootlayout