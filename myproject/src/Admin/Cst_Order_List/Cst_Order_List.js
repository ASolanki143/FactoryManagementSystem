import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdmCstOrderList() {
    const [order, setorder] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/customerorder")
            .then(res => res.json())
            .then(res => setorder(res))
    }, []);

    const [customer , setcustomer] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/customer")
        .then(res => res.json())
        .then(res => setcustomer(res))
    },[])

    const navigate = useNavigate()

    const formatedorder = order.map(order => {
        let cst = customer.find(temp=>temp._id == order.cst_id);
        let cst_name = (cst != null) ?cst.cst_name : "";
        let dateO = order.order_date;
        let date = new Date(dateO);
        console.log(date.getDate())
        console.log(order.is_reject)
        // order.order_date = new Date(order.order_date);
        return (
            <tr>
                <td className="fs-5 p-3 pt-4">{cst_name}</td>
                <td className="fs-5 p-3 pt-4">{date.getDate()}  /  {date.getMonth()}  /  {date.getFullYear()}</td>
                {
                    order.is_approve == true ? (
                        <td className="fs-5 p-3 pt-4 text-success">Approve</td>
                    )
                        : (
                            order.is_reject == true ? (
                                <td className="fs-5 p-3 pt-4 text-danger">Not Approve</td>
                            ) :
                                (
                                    <td className="fs-5 p-3 pt-4 text">Panding</td>

                                )
                        )
                }
                {
                    order.is_approve == true ? (
                        order.is_Complete == true ? (
                            <td className="fs-5 p-3 pt-4 text-success">Complete</td>
                        ) : (
                            <td className="fs-5 p-3 pt-4 text-danger">Not Complete</td>
                        )
                    ) :(
                        <td className="fs-5 p-3 pt-4">----</td>
                    )
                }
                {
                    (order.is_approve == true && order.is_Complete == false) ? (
                        <td><button className="btn btn-success w-75 h-75 mb-2" onClick={()=>{
                            order.is_Complete=true;
                            order.complete_date = new Date();
                            const noti = {
                                user_id : cst._id,
                                description : "Your Order is Completed on "+order.complete_date,
                                order_id : order._id
                            }
                            axios.post("http://localhost:3001/notification",noti)
                            .then(console.log("Notifictaion add"))
                            axios.put("http://localhost:3001/customerorder/"+order._id , order)
                            .then(window.location.reload())
                        }}>Complete</button></td>
                    ) : (
                        <td className="fs-5 p-3 pt-4">----</td>
                        
                    )
                }
                <td className="">
                    <button className="btn btn-dark  w-75 h-75 mb-2" onClick={() => {
                        navigate(`/admin/customer/${order.cst_id}/${order._id}`)
                    }}>
                        View
                    </button>
                </td>
            </tr>
        )
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
                        <th className="text-light fs-5 p-3 " scope="col">Customer Name</th>
                        <th className="text-light fs-5 p-3 " scope="col">Order Date</th>
                        <th className="text-light fs-5 p-3 " scope="col">Approve / Not</th>
                        <th className="text-light fs-5 p-3 " scope="col">Complete  / Not</th>
                        <th className="text-light fs-5 p-3 " scope="col"></th>
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