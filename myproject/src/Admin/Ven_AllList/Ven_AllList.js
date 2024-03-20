import { Link, useNavigate } from "react-router-dom";
import logofull from '../../images/logofull.png';
import './Ven_AllList.css';
import { useEffect, useState } from "react";
export default function Adm_Vendor() {

    const navigate = useNavigate();
    const [vendors, setVendors] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/vendor")
            .then(res => res.json())
            .then(res => setVendors(res))
    }, [])
    console.log(vendors)

    let formatedVendors = vendors.map(ven => {
        return (
            <div className="col-6 pb-4 ">
                <div class="card mainCstCard border border-dark border-2" >
                    <div class="card-body">
                        <h5 class="card-title fs-5 fw-bold pb-2">Vendor Name : {ven.ven_name}</h5>
                        <h6 class="card-subtitle fw-bold fs-6 mb-2 text-dark">Vendor Name : {ven.ven_cmp_name}</h6>
                        <p class="card-text">GST No. : {ven.ven_gstno}</p>
                        <Link className="card-link text-dark" to={"/admin/customer/" + ven._id} >More Details</Link>
                        <div className="row">
                            <div className="col-4">
                                <button className='btn btn-danger' onClick={() => {
                                    fetch("http://localhost:3001/vendor/" + ven._id,
                                        { method: "DELETE" })
                                        .then(res => res.json())
                                        .then(res => console.log(res))
                                    window.location.reload();
                                }}>Delete</button>
                            </div>

                            <div className="col-4">
                                <button className='btn btn-dark' onClick={() => {
                                    navigate("/admin/editvendor/" + ven._id)
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
                    <span className='fs-1 text-center text-dark'>Vendor List</span>
                </div>
                <div className="col-2 ">
                    <button className="btn btn-dark" onClick={() => {
                        navigate('/admin/addvendor')
                    }}>Add</button>
                </div>
            </div>
            <div className="row">
                {formatedVendors}
            </div>

        </>
    )
}