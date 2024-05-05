import React from 'react'
import Navbar from './pages/Navbar'
import Landing from './pages/Landing'
import Category from './pages/Category'

const Homepage = () => {
  return (
    <div className='flex table-row'>
        <Navbar />
        <Landing />
        <Category />
    </div>
  )
}

export default Homepage