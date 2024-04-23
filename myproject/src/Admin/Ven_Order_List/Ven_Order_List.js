import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VenOrderList() {
    const [order, setorder] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/vendororder")
            .then(res => res.json())
            .then(res => setorder(res))
    }, [])

    const [vendor, setvendor] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/vendor")
            .then(res => res.json())
            .then(res => setvendor(res))
    }, [])

    const navigate = useNavigate();
    const formatedorder = order.map(temp => {
        const ven = vendor.find(v => v._id == temp.ven_id)
        const date = new Date(temp.order_date)
        if (ven != null) {
            return (
                <tr>
                    <td className="fs-5 p-3 pt-4 ">{ven.ven_name}</td>
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
                    <td><button className="btn btn-dark mb-2 h-75" onClick={()=>{
                        navigate("/admin/vendororder/"+temp._id)
                    }}>View</button></td>
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
                        <th className="text-light fs-4 p-3 " scope="col">Vendor Name</th>
                        <th className="text-light fs-4 p-3 " scope="col">Order Date</th>
                        <th className="text-light fs-4 p-3 " scope="col">Material</th>
                        <th className="text-light fs-4 p-3 " scope="col">Thickness</th>
                        <th className="text-light fs-4 p-3 " scope="col">Quantity</th>
                        <th className="text-light fs-4 p-3 " scope="col">Status</th>
                        <th className="text-light fs-4 p-3 " scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {formatedorder}
                </tbody>
            </table>

        </div>
    )
}