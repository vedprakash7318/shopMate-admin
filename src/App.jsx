import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Users from './Pages/Users'
import Orders from './Pages/Orders'
import Products from './Pages/Products'
import Contacts from './Pages/Contacts'
import AddProduct from './Pages/AddProduct'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route  path='/'  element={<Login/>} />
        <Route  path='/dashboard'  element={<Dashboard/>} />
        <Route  path='/orders'  element={<Orders/>} />
        <Route  path='/contacts'  element={<Contacts/>} />
        <Route  path='/products'  element={<Products/>} />
        <Route  path='/users'  element={<Users/>} />
        <Route  path='/add-product'  element={<AddProduct/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App