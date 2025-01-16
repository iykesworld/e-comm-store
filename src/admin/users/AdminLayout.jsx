import React from 'react'
import AdminNavigaton from './AdminNavigaton'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AdminLayout = () => {

    const {user} = useSelector((state)=> state.auth);
    if(!user || user.role !== 'admin'){
        return <Navigate to='/login'/>
    }
  return (
    <div className='adminLayout'>
        <header><AdminNavigaton/></header>
        <main><Outlet/></main>
    </div>
  )
}

export default AdminLayout