import React from 'react'
import DashboardNav from '../components/DashboardNav'

const UserLayout = ({children}) => {
  return (
    <div>
        <DashboardNav/>
        <main className=''>
            {children}
        </main>

    </div>
  )
}

export default UserLayout