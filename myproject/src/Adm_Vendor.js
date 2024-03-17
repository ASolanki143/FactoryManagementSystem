import { Link } from "react-router-dom";
import logofull from './images/logofull.png'; 
import './Adm_Customer.css';
import { useEffect, useState } from "react";
export default function Adm_Vendor(){

    const [vendors , setVendors] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3001/vendor")
        .then(res=>res.json())
        .then(res=>setVendors(res))
    },[])
    console.log(vendors)
    return(
        <>
            <div class="cstmain">
                <div class="image">
                    <img src={logofull} alt="logo"></img>
                </div>
                <span>Vendor Name : </span>
                <p>GST No.</p>
                <Link>More Details</Link>
                <div class="btn">
                    <button>Order</button>
                    <button>Bills</button>
                </div>              
            </div>
            <div class="cstmain">
                <div class="image">
                    <img src={logofull} alt="logo"></img>
                </div>
                <span>Vendor Name : </span>
                <p>GST No.</p>
                <Link>More Details</Link>
                <div class="btn">
                    <button>Order</button>
                    <button>Bills</button>
                </div>              
            </div>
            <div class="cstmain">
                <div class="image">
                    <img src={logofull} alt="logo"></img>
                </div>
                <span>Vendor Name : </span>
                <p>GST No.</p>
                <Link>More Details</Link>
                <div class="btn">
                    <button>Order</button>
                    <button>Bills</button>
                </div>              
            </div>
            <div class="cstmain">
                <div class="image">
                    <img src={logofull} alt="logo"></img>
                </div>
                <span>Vendor Name : </span>
                <p>GST No.</p>
                <Link>More Details</Link>
                <div class="btn">
                    <button>Order</button>
                    <button>Bills</button>
                </div>              
            </div>
            <div class="cstmain">
                <div class="image">
                    <img src={logofull} alt="logo"></img>
                </div>
                <span>Vendor Name : </span>
                <p>GST No.</p>
                <Link>More Details</Link>
                <div class="btn">
                    <button>Order</button>
                    <button>Bills</button>
                </div>              
            </div>
        </>
    )
}