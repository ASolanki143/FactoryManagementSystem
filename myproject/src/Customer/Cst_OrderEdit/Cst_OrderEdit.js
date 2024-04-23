import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CstOrderEdit(){

    const params = useParams();
    const id = params.id;

    const [order , setorder] = useState({
        orderDetails : []
    });

    useEffect(()=>{
        fetch("http://localhost:3001/customerorder/"+id)
        .then(res=>res.json())
        .then(res=>setorder(res))
    },[])

    const [product , setproduct] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3001/product")
        .then(res=>res.json())
        .then(res=>setproduct(res))
    },[])

    const productDetail = order.orderDetails;

    const formatedproduct = productDetail.map(pro=>{
        const temppro = product.find(temp=>temp._id == productDetail.product_id);
        return(
            <tr>
                <td></td>
            </tr>
        )
    })
    return(
        <div className="container">
            <div className='row p-3 mb-3 border-bottom border-dark border-3 '>
                <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>Edit Order</span>
                </div>
            </div>

            <table class="table table-striped">
                <thead className="theadProduct">
                <tr>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Material</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Thickness</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Size</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Price</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Quantity</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Edit</th>
                        <th className="text-light fs-4 p-3 text-center" scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}