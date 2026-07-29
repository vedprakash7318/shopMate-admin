import React, { useEffect, useState } from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const AddProduct = () => {
    const location = useLocation()
    const editData = location.state?.item
    const [productTitle, setProductTitle] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productBadge, setProductBadge] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [image, setImage] = useState(null)

    useEffect(()=>{
        if(editData){
            setProductBadge(editData.productBadge)
            setProductPrice(editData.productPrice)
            setProductDescription(editData.productDescription)
            setProductTitle(editData.productTitle)
        }
    },[editData])


    const handleSubmit = async (e) => {
        const api_url = import.meta.env.VITE_API_URL
        e.preventDefault()
        const formData = new FormData();
        formData.append("productTitle", productTitle)
        formData.append("productPrice", productPrice)
        formData.append("productBadge", productBadge)
        formData.append("productDescription", productDescription)
        formData.append("image", image)
        try {
            const res = await axios.post(`${api_url}/api/product/add-product`, formData)
            console.log(res);

        } catch (error) {
            console.log(error);

        }
    }


    const handleUpdate  = async (e) => {
        const api_url = import.meta.env.VITE_API_URL
        e.preventDefault()
        const formData = new FormData();
        formData.append("productTitle", productTitle)
        formData.append("productPrice", productPrice)
        formData.append("productBadge", productBadge)
        formData.append("productDescription", productDescription)
        if(image){
            formData.append("image", image)
        }
        try {
            const res = await axios.put(`${api_url}/api/product/update-product/${editData._id}`, formData)
            console.log(res);

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <DashboardLayout>
                <form>
                    <input
                        type="text"
                        placeholder='Product Titile'
                        name='productTitle'
                        value={productTitle}
                        onChange={(e) => setProductTitle(e.target.value)}
                    /> <br /> <br />
                    <input
                        type="text"
                        placeholder='Product Price'
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    /> <br /> <br />
                    <input
                        type="text"
                        placeholder='Product Badge'
                        value={productBadge}
                        onChange={(e) => setProductBadge(e.target.value)}
                    /> <br /> <br />
                    <textarea
                        placeholder='Product Description'
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    ></textarea>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                    />

                    {editData? <button onClick={handleUpdate}>Update Product</button>:<button onClick={handleSubmit}>Add Product</button>}
                </form>



            </DashboardLayout>
        </>
    )
}

export default AddProduct