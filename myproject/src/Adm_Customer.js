import { Link, useNavigate } from "react-router-dom";
import logofull from './images/logofull.png'; 
import './Adm_Customer.css';
import { useEffect, useState } from "react";
export default function Adm_Customer(){
    const navigate = useNavigate()
    const [customer , setCustomer ] = useState([]);
    useEffect (()=>{
        fetch("http://localhost:3001/customer")
        .then((res)=>{
            // console.log(res);
            return res.json();
        })
        .then((res)=>setCustomer(res));
    },[])
    console.log(customer);

    let formatedcustomer = customer.map(cus=>{
        return(
            <div class="cstmain">
                
                <span>Customer Name : {cus.cst_name}</span>
                <p>{cus.cst_gstno}</p>
                <Link to={"/admin/customer/"+cus._id} onClick={()=>{
                    console.log("figifdhg id =",cus._id)
                    localStorage.setItem("cst_id" , cus._id);
                }}>More Details</Link>
                <div class="btn">
                    <button onClick={()=>{
                        fetch("http://localhost:3001/customer/"+cus._id,
                        {method : "DELETE"})
                    .then(res=>res.json())
                    .then(res=>console.log(res))
                    }}>Delete</button>
                    {/* <button>Bills</button> */}
                </div> 
                <div class="btn">
                    <button onClick={()=>{
                        localStorage.setItem("editcst_id",cus._id)
                        navigate("/admin/editcustmer/"+cus._id)
                    }}>Edit</button>
                    {/* <button>Bills</button> */}
                </div>              
            </div>
        )
    })
    return(
        // <>
        //     <div class="cstmain">
        //         <div class="image">
        //             <img src={logofull} alt="logo"></img>
        //         </div>
        //         <span>Customer Name : </span>
        //         <p>GST No.</p>
        //         <Link>More Details</Link>
        //         <div class="btn">
        //             <button>Order</button>
        //             <button>Bills</button>
        //         </div>              
        //     </div>
        //     <div class="cstmain">
        //         <div class="image">
        //             <img src={logofull} alt="logo"></img>
        //         </div>
        //         <span>Customer Name : </span>
        //         <p>GST No.</p>
        //         <Link>More Details</Link>
        //         <div class="btn">
        //             <button>Order</button>
        //             <button>Bills</button>
        //         </div>              
        //     </div>
        //     <div class="cstmain">
        //         <div class="image">
        //             <img src={logofull} alt="logo"></img>
        //         </div>
        //         <span>Customer Name : </span>
        //         <p>GST No.</p>
        //         <Link>More Details</Link>
        //         <div class="btn">
        //             <button>Order</button>
        //             <button>Bills</button>
        //         </div>              
        //     </div>
        //     <div class="cstmain">
        //         <div class="image">
        //             <img src={logofull} alt="logo"></img>
        //         </div>
        //         <span>Customer Name : </span>
        //         <p>GST No.</p>
        //         <Link>More Details</Link>
        //         <div class="btn">
        //             <button>Order</button>
        //             <button>Bills</button>
        //         </div>              
        //     </div>
        //     <div class="cstmain">
        //         <div class="image">
        //             <img src={logofull} alt="logo"></img>
        //         </div>
        //         <span>Customer Name : </span>
        //         <p>GST No.</p>
        //         <Link>More Details</Link>
        //         <div class="btn">
        //             <button>Order</button>
        //             <button>Bills</button>
        //         </div>              
        //     </div>
        //</>
        <>
        {formatedcustomer}
        </>
    )
}