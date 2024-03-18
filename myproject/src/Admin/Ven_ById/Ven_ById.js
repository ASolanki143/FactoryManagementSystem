import { useEffect, useState } from "react";
import "./Ven_ById.css"

export default function Adm_CustomerDetail(){
    const [vendor , setvendor] = useState({});
    let id = localStorage.getItem("ven_id");
    console.log("id = ",id);
    useEffect(()=>{
        fetch("http://localhost:3001/vendor/"+id)
        .then(res=>res.json())
        .then(res=>setvendor(res));
    },[])
    console.log("vendor" ,vendor);
    // localStorage.removeItem("cst_id");
    return(
        <div className="maincst">
            <span>Name : {vendor.ven_name}</span>
            <span>Company Name : {vendor.ven_cmp_name}</span>
            <span>GST No : {vendor.ven_gstno}</span>
            <span>Bank No : {vendor.ven_bankname}</span>
            <span>Back Account No : {vendor.ven_bankaccno}</span>
        </div>

    )
}