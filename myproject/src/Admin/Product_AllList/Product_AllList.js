import { useEffect, useState } from "react";
import './Product_AllList.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductAllList() {
    const [product, setproduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/product")
            .then(res => res.json())
            .then(res => setproduct(res))
    },[])

    console.log(product);

    const navigate = useNavigate();
    const formateProduct = product.map(pro => {
        return (
            <tr>
                <th className="fs-5 p-3">{pro.material}</th>
                <td className="fs-5 p-3">{pro.thickness}</td>
                <td className="fs-5 p-3">{pro.size}</td>
                <td className="fs-5 p-3">{pro.price}</td>
                <td><button className="btn btn-danger w-50 h-75 mb-2" onClick={()=>{
                    axios.delete("http://localhost:3001/product/"+pro._id)
                    .then(window.location.reload())
                }}>Delete</button></td>
                <td><button className="btn btn-primary w-50 h-75 mb-2" onClick={()=>{
                    navigate("/admin/editproduct/"+pro._id)
                }}>Edit</button></td>

            </tr>
        );
    })

    return (
        <div className="container">
            <div className="row border-bottom border-3 border-dark mb-3 p-3">
                <div className="col">
                    <span className="fs-1 fw-bold">Product List</span>
                </div>
                <div className="col-2 ">
                    <button className="btn btn-dark" onClick={()=>{
                        navigate('/admin/addproduct')
                    }}>Add</button>
                </div>
            </div>
        <table class="table table-striped">
            <thead className="theadProduct">
                <tr>
                    <th className="text-light fs-4 p-3" scope="col">Material</th>
                    <th className="text-light fs-4 p-3" scope="col">Thickness</th>
                    <th className="text-light fs-4 p-3" scope="col">Size</th>
                    <th className="text-light fs-4 p-3" scope="col">Price</th>
                    <th className="text-light fs-4 p-3"scope="col">Delete</th>
                    <th className="text-light fs-4 p-3"scope="col">Edit</th>

                </tr>
            </thead>
            <tbody>
                {formateProduct}
            </tbody>
        </table>
        </div>
    )
}