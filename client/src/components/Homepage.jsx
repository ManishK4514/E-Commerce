import React from 'react'
import Navbar from './pages/Navbar'
import Landing from './pages/Landing'
import Category from './pages/Category'
import Products from './pages/Products'

const Homepage = () => {
  return (
    <div className='flex table-row'>
        <Navbar />
        <Landing />
        <Category />
        <Products />
    </div>
  )
}

export default Homepage