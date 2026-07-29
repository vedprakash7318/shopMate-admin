import React, { useEffect, useState } from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import './CSS/Products.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Products = () => {
  const [products,setProducts]= useState([])
  const api_url = import.meta.env.VITE_API_URL
  const navigate = useNavigate()
  const fetchProduct = async()=>{
    const res =await axios.get(`${api_url}/api/product/get-product`)
    console.log(res.data.product);
    setProducts(res.data.product);
  }
  useEffect(()=>{
    fetchProduct()
  },[])
  

  const handleDelete=async(id)=>{
    try {
        const res = await axios.delete(`${api_url}/api/product/delete-product/${id}`)
        alert("Product Deleted")
        fetchProduct()
    } catch (error) {
      console.log(error);
      
    }
    
  }


  const handleEdit=(item)=>{
      navigate('/add-product',{state:{item}})
  }

  return (
    <DashboardLayout>
      <div className="products-header">
        <h1>All Products</h1>
        <button onClick={()=>navigate('/add-product')}>Add Product</button>
      </div>

      <div className="product-container">
        <table border='1' cellPadding='10' cellSpacing='0'>
          <tr>
            <th>Sr. No</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Badge</th>
            <th colSpan={2}>Action</th>
          </tr>

          <tbody>
            {
              products.map((item,index)=>(
                <tr>
                  <td className='data'>{index+1}</td>
                  <td className='data'><img src={item.image} className='product-image' /></td>
                  <td className='data'>{item.productTitle}</td>
                  <td className='data'>{item.productPrice}</td>
                  <td className='data'>{item.productBadge}</td>
                  <td className='data'><button onClick={()=>handleEdit(item)}>Edit</button></td>
                  <td className='data'><button onClick={()=>handleDelete(item._id)}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}

export default Products