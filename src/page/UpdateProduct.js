import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const UpdateProduct = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        stock: 0,
        description: ''
    })

    useEffect(() => {
        async function fetData() {
            const data = await axios.get("http://localhost:3001/products/" + id)
            setFormData(data.data)
        }
        fetData()
    }, [])

    const handleOnChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        async function fetchData() {
            const data = axios.put('http://localhost:3001/products/'+id, formData)
            // alert("new product has been update successfully")
        }
        alert("update product successfully")
        navigate('/')
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
                <textarea placeholder="Product Description" id="description" name="description"
                          value={formData.description}
                          onChange={handleOnChange}/>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default UpdateProduct;