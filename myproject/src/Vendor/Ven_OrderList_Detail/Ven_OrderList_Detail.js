import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Ven_VenOrderDetail() {

    const params = useParams();
    const id = params.id;
    const [order, setOrder] = useState({});

    useEffect(() => {
        fetch("http://localhost:3001/vendororder/" + id)
            .then(res => res.json())
            .then(res => setOrder(res))
    }, [])

    return (
        <div className="container">
            <div className='row p-3 mb-3 border-bottom border-dark border-3 '>
                <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>Order List</span>
                </div>
            </div>

            <div className="row">
                <div className="col pb-4 ">
                    <div class="card mainCstCard border border-dark border-2" >
                        <div class="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <h5 class="card-title fs-5 fw-bold pb-2">Order Date : {order.order_date}</h5>
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-4">
                                    <h5 class="card-title fs-5 fw-bold pb-2">Material : {order.material}</h5>
                                </div>
                                <div className="col-4">
                                    <h5 class="card-title fs-5 fw-bold pb-2">Thickness : {order.thickness}</h5>
                                </div>
                                <div className="col-4">
                                    <h5 class="card-title fs-5 fw-bold pb-2">Quantity : {order.quantity}</h5>
                                </div>
                            </div>
                            <h5 class="card-title fs-5 fw-bold pb-2 pt-3">Approve Date : {order.is_approve == true ? order.approve_date : "Not Approve"}</h5>
                            <h5 class="card-title fs-5 fw-bold pb-2 pt-3">Dispatch Date : {order.is_dispatch == true ? order.dispatch_date : "Not Dispatch"}</h5>
                            <h5 class="card-title fs-5 fw-bold pb-2 pt-3">Receive Date : {order.is_receive == true ? order.receive_date : "Not Dispatch"}</h5>


                            {/* <a href="#" class="card-link">Card link</a> */}
                            {/* <Link href="#" class="card-link">More Details</Link> */}
                            <div className="row">
                                <div className="col-3">
                                    {
                                        (order.is_approve == true && order.is_dispatch == false) ? (
                                            <button className='btn btn-dark fs-5 fw-bold' onClick={() => {
                                                const temp = { ...order, is_dispatch: true, dispatch_date: new Date() }
                                                axios.put("http://localhost:3001/vendororder/" + order._id, temp)
                                                    .then(window.location.reload())
                                            }}>Dispatch</button>
                                        ) : (
                                            <></>
                                        )
                                    }

                                </div>

                                {/* <div className="col-3">
                                    <button className='btn btn-dark' onClick={() => {
                                        localStorage.setItem("editcst_id", cus._id)
                                        navigate("/admin/editcustomer/" + cus._id)
                                    }}>Edit</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}