import { Link, useNavigate } from "react-router-dom";
import logofull from '../../images/logofull.png'; 
import './Ven_AllList.css';
import { useEffect, useState } from "react";
export default function Adm_Vendor(){

    const navigate = useNavigate();
    const [vendors , setVendors] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3001/vendor")
        .then(res=>res.json())
        .then(res=>setVendors(res))
    },[])
    console.log(vendors)

    let formatedVendors = vendors.map(ven=>{
        return(
            <div class="cstmain">
               
                <span>Vendor Name : {ven.ven_name}</span>
                <p>GST No.{ven.ven_gstno}</p>
                <Link to={"/admin/vendor/"+ven._id} onClick={()=>{
                    console.log("figifdhg id =",ven._id)
                    localStorage.setItem("ven_id" , ven._id);
                }}>More Details</Link>
                <div class="btn">
                    <button onClick={()=>{
                        fetch("http://localhost:3001/vendor/"+ven._id,
                        {method : "DELETE"})
                    .then(res=>res.json())
                    .then(res=>console.log(res))
                    window.location.reload();
                    }}>Delete</button>
                    {/* <button>Bills</button> */}
                </div> 
                <div class="btn">
                    <button onClick={()=>{
                        localStorage.setItem("editven_id",ven._id)
                        navigate("/admin/editvendor/"+ven._id)
                    }}>Edit</button>
                    {/* <button>Bills</button> */}
                </div>               
            </div>
        )
    })
    return(
        <>
            {formatedVendors}
        </>
    )
}