import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CstOrderList() {
    let [orderlist, setOrderList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/customerorder")
            .then(res => res.json())
            .then(res => setOrderList(res))
    }, [])
    console.log(orderlist);

    console.log("DAte ---",new Date())
    orderlist = orderlist.reverse();

    const navigate = useNavigate();
    const id = localStorage.getItem("cstloginid");
    console.log(id)

    let count = 0;

    const formateOrderList = orderlist.map((order) => {
        
        if (order.cst_id == id) {
            count++;
            let dateO = order.order_date;
            let date = new Date(dateO);
            console.log(date.getDate())
            console.log(order.is_reject)
            // order.order_date = new Date(order.order_date);
            return (
                <tr>
                    <td className="fs-5 p-3 pt-4">{count}</td>
                    <td className="fs-5 p-3 pt-4">{date.getDate()}  /  {date.getMonth()}  /  {date.getFullYear()}</td>
                    {
                        order.is_approve == true ? (
                            <td className="fs-5 p-3 pt-4 text-success">Approve</td>
                        )
                        : (
                            order.is_reject==true ? (
                                <td className="fs-5 p-3 pt-4 text-danger">Not Approve</td>
                            ):
                            (
                                <td className="fs-5 p-3 pt-4 text">Panding</td>

                            )
                        )
                    }
                    {
                        order.is_approve == true ? (
                            order.is_Complete == true ? (
                                <td className="fs-5 p-3 pt-4 text-success">Completed</td>
                            ) : (
                                <td className="fs-5 p-3 pt-4 text-danger">Not Complete</td>
                            )
                        ) : (
                            <td className="fs-5 p-3 pt-4">----</td>
                        )
                    }
                    <td>
                        <button className="btn btn-dark w-75 h-75 mb-2" onClick={() => {
                            navigate("/customer/orderlist/"+order._id)
                        }}>
                            View
                        </button>
                    </td>
                </tr>
            )
        }
    })
    return (
        <div className="container">
            <div className='row p-3 mb-3 border-bottom border-dark border-3 '>
                <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>Order List</span>
                </div>
            </div>

            <table class="table table-striped">
                <thead className="theadProduct">
                    <tr>
                        <th className="text-light fs-4 p-3 " scope="col"></th>
                        <th className="text-light fs-4 p-3 " scope="col">Order Date</th>
                        <th className="text-light fs-4 p-3 " scope="col">Approve / Not</th>
                        <th className="text-light fs-4 p-3 " scope="col">Complete / Not</th>
                        <th className="text-light fs-4 p-3 " scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {formateOrderList}
                </tbody>
            </table>

        </div>
    )
}