import React from 'react'
import Navbar from '../components/Navbar'

const HomeLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <main className=''>
            {children}
        </main>


    </div>
  )
}

export default HomeLayout