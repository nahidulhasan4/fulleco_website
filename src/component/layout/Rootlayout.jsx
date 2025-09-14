import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Navber from '../Navber'
import Footer from '../Footer'

const Rootlayout = () => {
  return (
    <>
    <Header/>
    <Navber/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Rootlayout