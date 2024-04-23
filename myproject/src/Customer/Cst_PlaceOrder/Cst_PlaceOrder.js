import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Placeorder() {
    
    let finalorder = {
        cst_id :'',
        orderDetails : [],
        order_date : ''
    }
    
    const date = new Date();
    console.log(date);
    const [product, setproduct] = useState({
        product_id : '',
        quantity : 0
    });
    let [order, setOrder] = useState([])

    const [productlist , setproductlist] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/product")
            .then(res => res.json())
            .then(res => setproductlist(res))
    }, []);



    const navigate = useNavigate();
   
    const formateProduct = productlist.map(pro => {
        let value = "Add"
        return (
            <tr>
                
                <td className="fs-5 p-3 pt-4 text-center">{pro.material}</td>
                <td className="fs-5 p-3 pt-4 text-center">{pro.thickness}</td>
                <td className="fs-5 p-3 pt-4 text-center">{pro.size}</td>
                <td className="fs-5 p-3 pt-4 text-center">{pro.price}</td>
                <td className="fs-5 p-3 pt-4 text-center">
                    <input type="text" className="h-75 mb-2" onChange={(e) => {
                        setproduct({ quantity: e.target.value, product_id: pro._id })
                    }}></input>
                </td>
                <td >
                    <button className="btn btn-dark mt-3 h-75 mb-2" onClick={()=>{
                        setOrder([...order,{product_id : product.product_id , quantity : product.quantity}]);
                        console.log(order)
                    }}>Add</button>
                </td>
                <td >
                    <button className="btn btn-danger w-75 mt-3 h-75 mb-2 ms-3" onClick={()=>{
                        let index = order.findIndex(temp=>{
                            console.log(temp, "----" , pro._id);
                            return temp.product_id == pro._id
                        })
                        setOrder(order.splice(index,1))
                        console.log(order)
                        console.log(index , "------")
                    }}>Remove</button>
                </td>
            </tr>
        );
    })
    return (
        <div className="container">
            <div className='row p-3 mb-3 border-bottom border-dark border-3 '>
                <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>Add Order Form</span>
                </div>
            </div>

            <table class="table table-striped">
                <thead className="theadProduct">
                    <tr>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Material</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Thickness</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Size</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Price</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Quantity</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Add</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {formateProduct}
                </tbody>
            </table>

            <button className="btn btn-dark" onClick={()=>{
               
                finalorder.cst_id = localStorage.getItem("cstloginid");
                finalorder.orderDetails = order
                finalorder.order_date = date
                const noti = {
                    user_id : "65f480993eb670a3b29bc744",
                    discription : ""
                }
                console.log(finalorder)
                axios.post("http://localhost:3001/customerorder",finalorder)
                .then(navigate("/customer/orderlist"))
            }}>Place</button>

        </div>
    )
}