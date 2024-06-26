import { Link, useNavigate } from "react-router-dom";
// import logofull from '../../images/logofull.png'; 
import './Cst_AllList.css';
import { useEffect, useState } from "react";
export default function Adm_Customer() {
    const navigate = useNavigate()
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/customer")
            .then((res) => {
                // console.log(res);
                return res.json();
            })
            .then((res) => setCustomer(res));
    }, [])
    console.log(customer);

    let formatedcustomer = customer.map(cus => {
        return (
           
            <div className="col-6 pb-4 ">
                <div class="card mainCstCard border border-dark border-1 rounded-3" >
                    <div class="card-body">
                        <h5 class="card-title fs-5 fw-bold pb-2">Customer Name : {cus.cst_name}</h5>
                        <h6 class="card-subtitle fw-bold fs-6 mb-2 text-dark">Company Name : {cus.cst_cmp_name}</h6>
                        <p class="card-text">GST No. : {cus.cst_gstno}</p>
                        <Link className="card-link text-dark" to={"/admin/customer/" + cus._id} onClick={() => {
                             console.log("figifdhg id =", cus._id)
                             localStorage.setItem("cst_id", cus._id);
                         }}>More Details</Link>
                       
                        <div className="row">
                            <div className="col-4">
                                <button className='btn btn-danger' onClick={() => {
                                    fetch("http://localhost:3001/customer/" + cus._id,
                                        { method: "DELETE" })
                                        .then(res => res.json())
                                        .then(res => console.log(res))
                                    window.location.reload();
                                }}>Delete</button>
                            </div>

                            <div className="col-4">
                                <button className='btn btn-dark' onClick={() => {
                                    localStorage.setItem("editcst_id", cus._id)
                                    navigate("/admin/editcustomer/" + cus._id)
                                }}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    })
    return (
       
        <>
        <div className="row titleCstAll p-3 mb-4 border-bottom border-dark border-3">
        <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>Customer List</span>
                </div>
                <div className="col-2">
                <button className="btn btn-dark" onClick={()=>{
                        navigate('/admin/customerorder')
                    }}>Order List</button>
                </div>
                <div className="col-2 ">
                    <button className="btn btn-dark" onClick={()=>{
                        navigate('/admin/addcustomer')
                    }}>Add</button>
                </div>
        </div>
        <div className="row">
            {formatedcustomer}
        </div>
        </>
    )
}