import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Product_Add.css'
function AddProduct() {
    const [product, setProduct] = useState({
        material: '',
        thickness: 0,
        size: '',
        price: 0
    });

    const navigate = useNavigate();
    

    const params = useParams();
    const id = params.id;
    const temp = (id==null)?"Add":"Edit";

    useEffect(()=>{
        fetch("http://localhost:3001/product/"+id)
        .then(res=>res.json())
        .then(res=>setProduct(res))
    },[]) 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
        console.log(name)
        console.log(product.name)
    };

    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // You can handle submitting the product data here, for example, by sending it to a server or adding it to a list of products.
    //     console.log(product);
    //     // Reset form after submission
    //     setProduct({
    //         material: '',
    //         thickness: 0,
    //         size: '',
    //         price: 0
    //     });
    // };

    return (
        <div className='container '>
            <div className='row p-3 mb-3 border-bottom border-dark border-3'>
                <div className='col fw-bold '>
                    <span className='fs-1 text-dark'>{temp} Product</span>
                </div>
            </div>
            <div className='container addproform p-4'>
                <div className='row px-3 mt-3 fs-5 fw-bold'>
                    <div className='col ps-0 me-2'>
                        <label className='ps-0 pb-2' htmlFor='material'>Material:</label>
                        <input type="text" id='material' name="material" value={product.material} onChange={handleChange} />
                    </div>
                    <div className='col ps-0'>
                        <label className='ps-0 pb-2' htmlFor='thickness'>Thickness:</label>
                        <input type="number" id='thickness' name="thickness" value={product.thickness} onChange={handleChange} />
                    </div>
                </div>
                <div className='row px-3 mt-3 fs-5 fw-bold'>
                    <div className='col ps-0 me-2'>
                        <label className='ps-0 pb-2' htmlFor='size'>Size:</label>
                        <input type="text" id='size' name="size" value={product.size} onChange={handleChange} />
                    </div>
                    <div className='col ps-0'>
                        <label className='ps-0 pb-2' htmlFor='price'>Price:</label>
                        <input type="number" id='price' name="price" value={product.price} onChange={handleChange} />
                    </div>
                </div>
                <div className='row px-3 pt-3 fs-5 fw-bold'>
                <button type="submit" className='btn btn-dark fs-5 fw-bold' onClick={()=>{
                    if(id==null){
                        axios.post("http://localhost:3001/product",product)
                    .then(navigate('/admin/productlist'))
                    }
                    else{
                        axios.put("http://localhost:3001/product/"+id,product)
                    .then(navigate('/admin/productlist'))
                    }
                }}>{temp} Product</button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
