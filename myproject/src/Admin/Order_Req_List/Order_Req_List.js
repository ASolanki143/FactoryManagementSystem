import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderReqList(){
    const [orderlist , setOrderList] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/customerorder")
        .then(res=>res.json())
        .then(res=>setOrderList(res));
    },[])

    const [customer , setCustomer] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/customer")
        .then(res=>res.json())
        .then(res=>setCustomer(res))
    },[])

    const navigate = useNavigate();
    let count = 0

    const formatedorderlist = orderlist.map(order=>{
        
        if(order.is_approve==false && order.is_reject==false){
            let dateO = order.order_date;
            let date = new Date(dateO);
            const cst = customer.find(temp => 
                temp._id == order.cst_id
            )
            count++;
            console.log(cst);
            if(cst != null){
            return(
                <tr>
                    <td className="fs-5 p-3 pt-4">{count}</td>
                    <td className="fs-5 p-3 pt-4">{cst.cst_name}</td>
                    <td className="fs-5 p-3 pt-4">
                        {date.getDate()} / {date.getMonth()} / {date.getFullYear()}
                    </td>
                    <td className="">
                        <button className="btn btn-success w-75 h-75 mb-2" onClick={()=>{
                            const tempOrder = {...order , is_approve : true , approve_date : new Date() , is_reject : false}
                            const noti = {
                                user_id: cst._id,
                                discription: "Your Order is Approve on " + tempOrder.approve_date,
                                order_id: order._id
                            }
                            axios.post("http://localhost:3001/notification", noti)
                                .then(console.log("Notifictaion add"))
                            axios.put("http://localhost:3001/customerorder/"+order._id , tempOrder )
                            .then(window.location.reload())
                            
                        }}>Accept</button>
                    </td>
                    <td className="">
                        <button className="btn btn-danger w-75 h-75 mb-2" onClick={()=>{
                             const tempOrder = {...order , is_reject : true , reject_date : new Date() , is_approve : false}
                             const noti = {
                                user_id: cst._id,
                                discription: "Your Order is Reject on " + tempOrder.reject_date,
                                order_id: order._id
                            }
                            axios.post("http://localhost:3001/notification", noti)
                                .then(console.log("Notifictaion add"))
                             axios.put("http://localhost:3001/customerorder/"+order._id , tempOrder )
                             .then(window.location.reload())
                        }}>Reject</button>
                    </td>
                    <td>
                        <button className="btn btn-dark w-75 h-75 mb-2" onClick={()=>{
                            navigate("/admin/orderrequest/"+order._id)
                        }}>View</button>
                    </td>
                </tr>
            )
                    }
        }
    })

    return(
        <div className="container">
            <div className='row p-3 mb-3 border-bottom border-dark border-3 '>
                <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>Order Request List</span>
                </div>
            </div>

            <table class="table table-striped">
                <thead className="theadProduct">
                    <tr>
                        <th className="text-light fs-4 p-3"scope="col"></th>
                        <th className="text-light fs-4 p-3" scope="col">Customer Name</th>
                        <th className="text-light fs-4 p-3" scope="col">Order Date</th>
                        <th className="text-light fs-4 p-3" scope="col">Approve</th>
                        <th className="text-light fs-4 p-3" scope="col">Reject</th>
                        <th className="text-light fs-4 p-3"scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {formatedorderlist}
                </tbody>
            </table>

        </div>
    )
}