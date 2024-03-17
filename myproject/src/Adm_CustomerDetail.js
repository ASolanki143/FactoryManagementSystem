import { useEffect, useState } from "react";
import "./Adm_CustomerDetail.css"

export default function Adm_CustomerDetail(){
    const [customer , setcustomer] = useState({});
    let id = localStorage.getItem("cst_id");
    console.log("id = ",id);
    useEffect(()=>{
        fetch("http://localhost:3001/customer/"+id)
        .then(res=>res.json())
        .then(res=>setcustomer(res));
    },[])
    console.log("customer" ,customer);
    // localStorage.removeItem("cst_id");
    return(
        <div className="maincst">
            <span>Name : {customer.cst_name}</span>
            <span>Company Name : {customer.cst_cmp_name}</span>
            <span>GST No : {customer.cst_gstno}</span>
            <span>Bank No : {customer.cst_bankname}</span>
            <span>Back Account No : {customer.cst_bankaccno}</span>
        </div>

    )
}