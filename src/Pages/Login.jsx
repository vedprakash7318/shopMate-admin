import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const api_url = import.meta.env.VITE_API_URL
    const navigate = useNavigate()
    const handleLogin = async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            const res = await axios.post(`${api_url}/api/user/login`,{email,password})
            console.log(res);
            if(res.data.role=='customer'){
                setLoading(false)
                return alert("User not Found")
            }
            if(res.data.token && res.data.role =='admin'){
                sessionStorage.setItem('token',res.data.token)
                navigate('/dashboard')    
            }
        } catch (error) {
            console.log(error);  
        }
    }
  return (
    <>
        <h3>Login</h3>
        <input type="email" placeholder='email' name='email' onChange={(e)=>setEmail(e.target.value)}/> <br /> <br />
        <input type="password" placeholder='enter password' name='password' onChange={(e)=>setPassword(e.target.value)}/>  <br /> <br />
        <button onClick={handleLogin}>Login</button>
    </>
  )
}
export default Login