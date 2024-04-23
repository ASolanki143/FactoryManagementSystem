import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Ven_VenOrderList(){
    const [order , setorder] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/vendororder")
        .then(res=>res.json())
        .then(res=>setorder(res))
    },[])

    const navigate = useNavigate();

    const id = localStorage.getItem("venloginid")

    const formatedorder = order.map(temp=>{
        const date = new Date(temp.order_date);
        if(temp.ven_id == id){
            return(
                <tr>
                    <td>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</td>
                    <td>{temp.material}</td>
                    <td>{temp.thickness}</td>
                    <td>{temp.quantity}</td>
                    {
                        temp.is_approve == true  ? (
                            <td className="text-success">Approve</td>
                        ) : (
                            <td className="text-danger">Not Approve</td>
                        )
                    }
                    {
                        temp.is_approve == true  ? (
                            temp.is_dispatch == true ? (
                                <td className="text-success">Dispatch</td>
                            ) : (
                                <td className="text-danger">Not Dispatch</td>
                            )
                        ): (
                            <td>-----</td>
                            
                        )
                    }
                    {
                        temp.is_approve == true && temp.is_dispatch == true ? (
                            temp.is_arrive == true ? (
                                <td className="text-success">Receive</td>
                            ) : (
                                <td className="text-danger">Not Receive</td>
                            )
                        ) : (
                            <td>-----</td>
                        )
                        
                    }
                    <td><button className="btn btn-dark mb-2 h-75 fs-6" onClick={()=>{
                        navigate("/vendor/orderlist/"+temp._id)
                    }}>View</button></td>
                </tr>
            )
        }
    })

    return(
        <div className="container">
        <div className='row p-3 mb-3 border-bottom border-dark border-3 '>
            <div className='col fw-bold '>
                <span className='fs-1 text-center text-dark'>Order List</span>
            </div>
        </div>

        <table class="table table-striped">
            <thead className="theadProduct">
                <tr>
                    <th className="text-light fs-5 p-3 " scope="col">Order Date</th>
                    <th className="text-light fs-5 p-3 " scope="col">Material</th>
                    <th className="text-light fs-5 p-3 " scope="col">Thickness</th>
                    <th className="text-light fs-5 p-3 " scope="col">Quantity</th>
                    <th className="text-light fs-5 p-3 " scope="col">Approve / Not</th>
                    <th className="text-light fs-5 p-3 " scope="col">Dispatch / Not</th>
                    <th className="text-light fs-5 p-3 " scope="col">Receive / Not</th>
                    <th className="text-light fs-5 p-3 " scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {formatedorder}
            </tbody>
        </table>

    </div>
    )
}