import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
import axios from "axios";
import { useEffect, useState } from "react";

export default function VenOrderReq(){
    const [order , setorder] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/vendororder")
        .then(res=>res.json())
        .then(res=>setorder(res))
    },[]);

    const id = localStorage.getItem("venloginid");

    const formatedorder = order.map(temp=>{
        const orderdate = new Date(temp.order_date);

        if(temp.ven_id == id && temp.is_approve == false && temp.is_reject == false){
        return(
            <tr>
                <td className="fs-5 p-3 pt-4">{temp.material}</td>
                <td className="fs-5 p-3 pt-4">{temp.thickness}</td>
                <td className="fs-5 p-3 pt-4">{temp.quantity}</td>
                <td className="fs-5 p-3 pt-4">{orderdate.getDate()}/{orderdate.getMonth()}/{orderdate.getFullYear()}</td>
                <td ><button className="btn btn-success w-75 h-75 mb-2" onClick={()=>{
                    temp.is_approve = true;
                    temp.approve_date = new Date();
                    console.log(temp)
                    axios.put("http://localhost:3001/vendororder/"+temp._id,temp)
                    .then(window.location.reload())
                }}>Accept</button></td>
                <td ><button className="btn btn-danger w-75 h-75 mb-2" onClick={()=>{
                    temp.is_reject = true;
                    temp.reject_date = new Date();
                    axios.put("http://localhost:3001/vendororder/"+temp._id,temp)
                    .then(window.location.reload())
                }}>Reject</button></td>
            </tr>
        )
       }
    })

    return(
        <div className="container">
            <div className="'row p-3 mb-3 border-bottom border-dark border-3 ">
                <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>Order Request List</span>
                </div>
            </div>

            <table class="table table-striped">
                <thead className="theadProduct">
                    <tr>
                        <th className="text-light fs-4 p-3 " scope="col">Material</th>
                        <th className="text-light fs-4 p-3 " scope="col">Thickness</th>
                        <th className="text-light fs-4 p-3 " scope="col">Quantity</th>
                        <th className="text-light fs-4 p-3 " scope="col">Order Date</th>

                        <th className="text-light fs-4 p-3" style={{width : "180px"}} scope="col">Approve</th>
                        <th className="text-light fs-4 p-3" style={{width : "180px"}} scope="col">Reject</th>

                    </tr>
                </thead>
                <tbody>
                    {formatedorder}
                </tbody>
            </table>
        </div>
    )
}