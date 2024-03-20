import { useEffect, useState } from "react";
import "./Cst_ById.css"
import { Link, useNavigate } from "react-router-dom";

export default function Adm_CustomerDetail() {
    const [cus, setcustomer] = useState({});
    let id = localStorage.getItem("cst_id");
    console.log("id = ", id);
    useEffect(() => {
        fetch("http://localhost:3001/customer/" + id)
            .then(res => res.json())
            .then(res => setcustomer(res));
    }, [])
    console.log("customer", cus);
    const navigate = useNavigate();
    // localStorage.removeItem("cst_id");
    return (
        <div className="container-fluid">
            <div className="row p-3 mb-3 CstIdHeading border-bottom border-dark border-3">
                <div className="col">
                    <span className="text-dark fs-1 fw-bold">{cus.cst_name}</span>
                </div>
            </div>
            <div className="row">
            <div className="col pb-4 ">
                <div class="card mainCstCard border border-dark border-2" >
                    <div class="card-body">
                        <div className="row">
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">Company Name : {cus.cst_cmp_name}</h5>
                            </div>
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">GST No. : {cus.cst_gstno}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">Bank Name : {cus.cst_bankname}</h5>
                            </div>
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">Bank Account No. : {cus.cst_bankaccno}</h5>
                            </div>
                        </div>
                        <h5 class="card-title fs-5 fw-bold pb-2">Email : {cus.cst_email}</h5>
                        <h5 class="card-title fs-5 fw-bold pb-2">Website : {cus.cst_website}</h5>

                        
                        {/* <a href="#" class="card-link">Card link</a> */}
                        {/* <Link href="#" class="card-link">More Details</Link> */}
                        <div className="row">
                            <div className="col-3">
                                <button className='btn btn-danger' onClick={() => {
                                    fetch("http://localhost:3001/customer/" + cus._id,
                                        { method: "DELETE" })
                                        .then(res => res.json())
                                        .then(res => console.log(res))
                                    window.location.reload();
                                }}>Delete</button>
                            </div>

                            <div className="col-3">
                                <button className='btn btn-dark' onClick={() => {
                                    localStorage.setItem("editcst_id", cus._id)
                                    navigate("/admin/editcustomer/" + cus._id)
                                }}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row p-3 mb-3 CstIdHeading border-bottom border-dark border-3">
                <div className="col">
                    <span className="text-dark fs-1 fw-bold">Order List</span>
                </div>
            </div>
            <div className="row">
            <div className="col pb-4 ">
                <div class="card mainCstCard border border-dark border-2" >
                    <div class="card-body">
                        <div className="row">
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">Company Name : {cus.cst_cmp_name}</h5>
                            </div>
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">GST No. : {cus.cst_gstno}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">Bank Name : {cus.cst_bankname}</h5>
                            </div>
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">Bank Account No. : {cus.cst_bankaccno}</h5>
                            </div>
                        </div>
                        <h5 class="card-title fs-5 fw-bold pb-2">Email : {cus.cst_email}</h5>
                        <h5 class="card-title fs-5 fw-bold pb-2">Website : {cus.cst_website}</h5>

                        
                        {/* <a href="#" class="card-link">Card link</a> */}
                        {/* <Link href="#" class="card-link">More Details</Link> */}
                        <div className="row">
                            <div className="col-3">
                                <button className='btn btn-danger' onClick={() => {
                                    fetch("http://localhost:3001/customer/" + cus._id,
                                        { method: "DELETE" })
                                        .then(res => res.json())
                                        .then(res => console.log(res))
                                    window.location.reload();
                                }}>Delete</button>
                            </div>

                            <div className="col-3">
                                <button className='btn btn-dark' onClick={() => {
                                    localStorage.setItem("editcst_id", cus._id)
                                    navigate("/admin/editcustomer/" + cus._id)
                                }}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row p-3 mb-3 CstIdHeading border-bottom border-dark border-3">
                <div className="col">
                    <span className="text-dark fs-1 fw-bold">Bill List</span>
                </div>
            </div>
            <div className="row">
            <div className="col pb-4 ">
                <div class="card mainCstCard border border-dark border-2" >
                    <div class="card-body">
                        <div className="row">
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">Company Name : {cus.cst_cmp_name}</h5>
                            </div>
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">GST No. : {cus.cst_gstno}</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">Bank Name : {cus.cst_bankname}</h5>
                            </div>
                            <div className="col-6">
                            <h5 class="card-title fs-5 fw-bold pb-2">Bank Account No. : {cus.cst_bankaccno}</h5>
                            </div>
                        </div>
                        <h5 class="card-title fs-5 fw-bold pb-2">Email : {cus.cst_email}</h5>
                        <h5 class="card-title fs-5 fw-bold pb-2">Website : {cus.cst_website}</h5>

                        
                        {/* <a href="#" class="card-link">Card link</a> */}
                        {/* <Link href="#" class="card-link">More Details</Link> */}
                        <div className="row">
                            <div className="col-3">
                                <button className='btn btn-danger' onClick={() => {
                                    fetch("http://localhost:3001/customer/" + cus._id,
                                        { method: "DELETE" })
                                        .then(res => res.json())
                                        .then(res => console.log(res))
                                    window.location.reload();
                                }}>Delete</button>
                            </div>

                            <div className="col-3">
                                <button className='btn btn-dark' onClick={() => {
                                    localStorage.setItem("editcst_id", cus._id)
                                    navigate("/admin/editcustomer/" + cus._id)
                                }}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        // <div className="maincst">
        //     <span>Name : {customer.cst_name}</span>
        //     <span>Company Name : {customer.cst_cmp_name}</span>
        //     <span>GST No : {customer.cst_gstno}</span>
        //     <span>Bank No : {customer.cst_bankname}</span>
        //     <span>Back Account No : {customer.cst_bankaccno}</span>
        // </div>

    )
}