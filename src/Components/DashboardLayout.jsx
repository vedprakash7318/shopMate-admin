import React, { Children } from 'react'
import './CSS/DashboardLayout.css'
import { Link } from 'react-router-dom'
const DashboardLayout = ({children}) => {

  return (
    <>
    <div className="dashboard-container">
        <div className="sidebar">
            <div className="sidebar-top">
                <h1>Dashboard</h1>
            </div>
            <div className="sidebar-menu">
                <ul>
                    <Link className='navlink' to='/dashboard'><li>Dashboard</li></Link>
                    <Link className='navlink' to='/orders'><li>Orders</li></Link>
                    <Link className='navlink' to='/contacts'><li>Messages</li></Link>
                    <Link className='navlink' to='/products'><li>Products</li></Link>
                    <Link className='navlink' to='/users'><li>Users</li></Link>
                </ul>
            </div>
            <div className="sidebar-logout">
                <button>Logout</button>
            </div>
        </div>
        <div className="main">
            <div className="dashboard-header">
                <h1>Welcome Back! Admin</h1>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    </div>
    </>
  )
}

export default DashboardLayout