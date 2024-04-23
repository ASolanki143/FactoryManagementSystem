import { useEffect, useState } from "react";
import "./Ven_ById.css"
import { useNavigate, useParams } from "react-router-dom";

export default function Adm_CustomerDetail() {
    const [vendor, setvendor] = useState({});
    const params = useParams();
    const id = params.id;
    console.log("id = ", id);
    useEffect(() => {
        fetch("http://localhost:3001/vendor/" + id)
            .then(res => res.json())
            .then(res => setvendor(res));
    }, [])
    console.log("vendor", vendor);

    const [order, setorder] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/vendororder")
            .then(res => res.json())
            .then(res => setorder(res))
    }, [])

    const formatedorder = order.map(temp => {
        const date = new Date(temp.order_date)
        if (vendor._id == temp.ven_id) {
            return (
                <tr>
                    <td className="fs-5 p-3 pt-4 ">{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</td>
                    <td className="fs-5 p-3 pt-4 ">{temp.material}</td>
                    <td className="fs-5 p-3 pt-4 ">{temp.thickness}</td>
                    <td className="fs-5 p-3 pt-4 ">{temp.quantity}</td>
                    {
                        temp.is_approve == true ? (
                            <td className="fs-5 p-3 pt-4 text-success">Approve</td>
                        )
                            : (
                                temp.is_reject == true ? (
                                    <td className="fs-5 p-3 pt-4 text-danger">Not Approve</td>
                                ) :
                                    (
                                        <td className="fs-5 p-3 pt-4 text-warning">Panding</td>

                                    )
                            )
                    }
                </tr>
            )
        }
    })
    const navigate = useNavigate();
    // localStorage.removeItem("cst_id");
    return (
        <div className="container-fluid">
            <div className="row p-3 mb-3 CstIdHeading border-bottom border-dark border-3">
                <div className="col">
                    <span className="text-dark fs-1 fw-bold">{vendor.ven_name}</span>
                </div>
            </div>
            <div className="row">
                <div className="col pb-4 ">
                    <div class="card mainCstCard border border-dark border-2" >
                        <div class="card-body">
                            <div className="row">
                                <div className="col-6">
                                    <h5 class="card-title fs-5 fw-bold pb-2">Company Name : {vendor.ven_cmp_name}</h5>
                                </div>
                                <div className="col-6">
                                    <h5 class="card-title fs-5 fw-bold pb-2">GST No. : {vendor.ven_gstno}</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h5 class="card-title fs-5 fw-bold pb-2">Bank Name : {vendor.ven_bankname}</h5>
                                </div>
                                <div className="col-6">
                                    <h5 class="card-title fs-5 fw-bold pb-2">Bank Account No. : {vendor.ven_bankaccno}</h5>
                                </div>
                            </div>
                            <h5 class="card-title fs-5 fw-bold pb-2">Email : {vendor.ven_email}</h5>
                            <h5 class="card-title fs-5 fw-bold pb-2">Website : {vendor.ven_website}</h5>


                            {/* <a href="#" class="card-link">Card link</a> */}
                            {/* <Link href="#" class="card-link">More Details</Link> */}
                            <div className="row">
                                <div className="col-3">
                                    <button className='btn btn-danger' onClick={() => {
                                        fetch("http://localhost:3001/vendor/" + vendor._id,
                                            { method: "DELETE" })
                                            .then(res => res.json())
                                            .then(res => console.log(res))
                                        window.location.reload();
                                    }}>Delete</button>
                                </div>

                                <div className="col-3">
                                    <button className='btn btn-dark' onClick={() => {
                                        localStorage.setItem("editcst_id", vendor._id)
                                        navigate("/admin/editvendor/" + vendor._id)
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
            <table class="table table-striped">
                <thead className="theadProduct">
                    <tr>
                        <th className="text-light fs-4 p-3 " scope="col">Order Date</th>
                        <th className="text-light fs-4 p-3 " scope="col">Material</th>
                        <th className="text-light fs-4 p-3 " scope="col">Thickness</th>
                        <th className="text-light fs-4 p-3 " scope="col">Quantity</th>
                        <th className="text-light fs-4 p-3 " scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {formatedorder}
                </tbody>
            </table>
        </div>

    )
}