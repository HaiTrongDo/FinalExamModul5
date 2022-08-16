import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";



const AddProduct = () => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:'',
        price:0,
        stock :0,
        description:''
    })

    const handleOnChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault();
         async function fetchData (){
             const data = axios.post('http://localhost:3001/products', formData)
             alert("new product has been added successfully")
             navigate('/')
         }
        fetchData()
    }

    return (
        <div style={{width: "500px"}}>
            <form className="mb-3" onSubmit={handleOnSubmit}>
                <h1>Add New Product Here</h1>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Product Name </label> <br/>
                    <input type="text" className="product-name" placeholder="Product Name" id="name" name="name"
                    value={formData.name}
                           onChange={handleOnChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Product Price </label> <br/>
                    <input type="number" className="product-name" placeholder="Product Price" id="price" name="price"
                           value={formData.price}
                           onChange={handleOnChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="stock" className="form-label"> Stock </label> <br/>
                    <input type="number" className="product-name" placeholder="Product Stock" id="stock" name="stock"
                           value={formData.stock}
                           onChange={handleOnChange}/>
                </div>
                <label htmlFor="description" className="form-label"> Stock </label> <br/>
                <textarea  placeholder="Product Description" id="description" name="description"
                           value={formData.description}
                           onChange={handleOnChange}/>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;