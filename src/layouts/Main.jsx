import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <>
        <Header />
        <div className="flex py-12 justify-center px-6 md:px-0">
            <Outlet/>
        </div>
    </>
  )
}

export default Main