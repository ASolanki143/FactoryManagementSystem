import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CstOrderDetail(){

    const params = useParams();
    const id = params.id;

    const [order , setOrder] = useState({
        orderDetails : []
    });

    useEffect(()=>{
        fetch("http://localhost:3001/customerorder/"+id)
        .then(res=>res.json())
        .then(res=>setOrder(res))
    },[1])

    const [product , setproduct] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/product")
        .then(res=>res.json())
        .then(res=>setproduct(res))
    },[])
    
    const productO = order.orderDetails;

    // const [productDetail , setproductdetail] = useState({});
    
    const formatedproductO = productO.map(pro=>{
        const temppro = product.find(element=>element._id == pro.product_id);
        console.log("Product =========",temppro);
        if(temppro !=null){
        return(
            <tr>
                <th className="fs-5 p-3">{temppro.material}</th>
                <th className="fs-5 p-3">{temppro.thickness}</th>
                <th className="fs-5 p-3">{temppro.size}</th>
                <th className="fs-5 p-3">{pro.quantity}</th>

            </tr>
        )
        }
    }) 
    // const formatproduct = productO.map(temp=>{
    //     let tempproduct = product.find(pro=>pro._id == temp.product_id);
    //     return(
    //         <tr>
    //             <td>{tempproduct.material}</td>
    //             <td>{tempproduct.thickness}</td>
    //             <td>{tempproduct.size}</td>
    //             <td>{temp.quantity}</td>
    //         </tr>
    //     )
    // })

    // console.log(order)
 
    return(
        <div className="container">
             <div className='row p-3 mb-3 border-bottom border-dark border-3 '>
                <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>Order Detail</span>
                </div>
            </div>
            <div className="row">
                <div className="col p-3">
                    <span className="fs-4 fw-bold">Order Date : {order.order_date}</span>
                    <br></br>
                    <br></br>
                    {
                        order.is_approve == true ?
                        (
                            <span className="fs-5 fw-bold ">Approve Date : {order.approve_date}</span>
                        ) : 
                        (
                            order.is_reject == true ?
                            (
                                <span>Reject Date : {order.reject_date}</span>
                            ) :
                            (
                                <span>Panding</span>
                            )
                        )
                    }
                    <br></br>
                    <br></br>
                    <span className="fs-5 fw-bold">Complete Date : {order.complete_date}</span>
                    <br></br>
                    <br></br>
                    <span className="fs-5 fw-bold">Dispatch Date : {order.complete_date}</span>
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