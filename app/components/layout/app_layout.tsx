import React from 'react'
import Navbar from '../navbar/navbar'

const AppLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      <div className='mx-5 sm:mx-10 lg:mx-20'>
        {children}
      </div>

    </div>
  )
}

export default AppLayout