import { useEffect, useState } from "react";
import "./Ven_Order.css"
import axios from "axios";
export default function VendorOrderForm() {
    const [vendor, setvendor] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/vendor")
            .then(res => res.json())
            .then(res => setvendor(res))
    }, [])

    const [order, setorder] = useState({
        order_date : new Date()
    });


    const formatedVendor = vendor.map(temp => {
        return (
            <option className="p-2" value={temp._id}>{temp.ven_name}</option>
        )
    })

    var date = new Date();

    // setorder({...order , order_date : new Date()})


    const handleChange = (e) => {
        const { name, value } = e.target;
        setorder({
            ...order,
            [name]: value,
        });
       
    };
    return (
        
        <div className="container">
            <div className="row titleCstAll p-3 mb-4 border-bottom border-dark border-3">
                <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>Order Request Form</span>
                </div>
            </div>

            <div className='container addproform p-4'>
                <div className='row px-3 mt-3 fs-5 fw-bold'>
                    <div className='col ps-0 me-2'>
                        <label className='ps-0 pb-2 mb-1' htmlFor='material'>Vendor Name:</label>
                        <select className="p-2 selectarea w-100 custom-select" name="ven_id" id="inlineFormCustomSelectPref" onChange={handleChange}>
                            <option className="text-muted fs-6">Select Vendor</option>
                            {formatedVendor}
                        </select>
                    </div>
                    <div className='col ps-0'>
                        <label className='ps-0 pb-2 mb-1' htmlFor='material'>Material : </label>
                        <select className="p-2 selectarea w-100 custom-select" name="material" id="inlineFormCustomSelectPref" onChange={handleChange}>
                            <option className="text-muted fs-6">Select Material</option>
                            <option value="MS">MS</option>
                            <option value="SS">SS</option>

                        </select>
                    </div>
                </div>
                <div className='row px-3 mt-3 fs-5 fw-bold'>
                    <div className='col ps-0 me-2'>
                        <label className='ps-0 pb-2 mb-1' htmlFor='size'>Thickness:</label>
                        <select className="p-2 selectarea w-100 custom-select" name="thickness" id="inlineFormCustomSelectPref" onChange={handleChange}>
                            <option className="text-muted fs-6">Select Thickness</option> 
                            <option value="10">10</option>
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="16">16</option>
                            <option value="18">18</option>

                        </select>
                    </div>
                    <div className='col ps-0'>
                        <label className='ps-0 pb-2' htmlFor='price'>Quntity:</label>
                        <input type="number" id='price' name="quantity"  onChange={handleChange} />
                    </div>
                </div>
                <div className='row px-3 pt-3 fs-5 fw-bold'>
                <button type="submit" className='btn btn-dark fs-5 fw-bold' onClick={()=>{
                    // if(id==null){
                    //     axios.post("http://localhost:3001/product",product)
                    // .then(navigate('/admin/productlist'))
                    // }
                    // else{
                    //     axios.put("http://localhost:3001/product/"+id,product)
                    // .then(navigate('/admin/productlist'))
                    // }
                    // setorder({...order , order_date : new Date()})
                    axios.post("http://localhost:3001/vendororder",order)
                    .then(console.log("Order Placed"))
                    console.log(order)
                }}> Order</button>
                </div>
            </div>
        </div>
    )
}