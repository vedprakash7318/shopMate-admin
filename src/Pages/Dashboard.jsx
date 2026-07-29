import React, { useEffect } from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    if(!sessionStorage.getItem('token')){
      navigate('/')
    }
  },[])
  return (
    <DashboardLayout>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolorem perferendis provident quasi aspernatur ut ducimus esse molestias at architecto maiores ad vero nam, ex enim itaque saepe aliquam omnis.</p>
    <p></p>
    </DashboardLayout>
  )
}

export default Dashboard