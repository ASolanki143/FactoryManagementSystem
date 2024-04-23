import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function OrderReqDetail() {

    const params = useParams();
    const id = params.id;
    const [order, setorder] = useState({
        orderDetails: []
    });

    useEffect(() => {
        fetch("http://localhost:3001/customerorder/" + id)
            .then(res => res.json())
            .then(res => setorder(res))
    }, [])

    const [product, setproduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/product")
            .then(res => res.json())
            .then(res => setproduct(res))
    }, [])

    const [customer, setCustomer] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/customer")
            .then(res => res.json())
            .then(res => setCustomer(res))
    }, [])

    const productO = order.orderDetails

    const navigate = useNavigate()

    const formatedproductO = productO.map(pro => {
        const temppro = product.find(element => element._id == pro.product_id);
        if (temppro != null) {
            return (
                <tr>
                    <th className="fs-5 p-3">{temppro.material}</th>
                    <th className="fs-5 p-3">{temppro.thickness}</th>
                    <th className="fs-5 p-3">{temppro.size}</th>
                    <th className="fs-5 p-3">{pro.quantity}</th>
                </tr>
            )
        }
    })

    const cst = customer.find(temp =>
        temp._id == order.cst_id
    )
    return (

        <div className="container">
            <div className='row p-3 mb-3 border-bottom border-dark border-3 '>
                <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>Order Detail</span>
                </div>
                <div className="col-2">
                    <button className="btn btn-success h-75 mb-2" onClick={() => {
                        const tempOrder = { ...order, is_approve: true, approve_date: new Date(), is_reject: false }
                        const noti = {
                            user_id: cst._id,
                            discription: "Your Order is Approve on " + tempOrder.approve_date,
                            order_id: order._id
                        }
                        axios.post("http://localhost:3001/notification", noti)
                            .then(console.log("Notifictaion add"))
                        axios.put("http://localhost:3001/customerorder/" + order._id, tempOrder)
                            .then(navigate("/admin/orderrequest"))

                    }}>Accept</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-danger h-75 mb-2" onClick={() => {
                        const tempOrder = { ...order, is_reject: true, reject_date: new Date(), is_approve: false }
                        const noti = {
                            user_id: cst._id,
                            discription: "Your Order is Reject on " + tempOrder.reject_date,
                            order_id: order._id
                        }
                        axios.post("http://localhost:3001/notification", noti)
                            .then(console.log("Notifictaion add"))
                        axios.put("http://localhost:3001/customerorder/" + order._id, tempOrder)
                            .then(navigate("/admin/orderrequest"))
                    }}>Reject</button>
                </div>
            </div>
            <div className="row">
                <div className="col p-3">
                    <span className="fs-4 fw-bold">Customer Name : {(cst != null) ? cst.cst_name : ""}</span>
                    <br></br>
                    <span className="fs-4 fw-bold">Order Date : {order.order_date}</span>
                    <br></br>
                    <br></br>
                </div>

            </div>
            <div className='row p-3 mb-3 border-bottom border-dark border-3 '>
                <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>Product List</span>
                </div>
            </div>
            <table class="table table-striped">
                <thead className="theadProduct">
                    <tr>
                        <th className="text-light fs-4 p-3" scope="col">Material</th>
                        <th className="text-light fs-4 p-3" scope="col">Thickness</th>
                        <th className="text-light fs-4 p-3" scope="col">Size</th>
                        <th className="text-light fs-4 p-3" scope="col">Quantity</th>


                    </tr>
                </thead>
                <tbody>
                    {formatedproductO}
                </tbody>
            </table>
        </div>
    )
}