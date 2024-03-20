// export default function Adm_addcustomer(){

//     return(
//         <>

//         </>
//     )
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate, useParams } from 'react-router-dom';
import './Cst_Add.css'
function AddCustomer() {
    const [formData, setFormData] = useState({
        cst_name: '',
        cst_cmp_name: '',
        cst_gstno: '',
        cst_bankname: '',
        cst_bankaccno: '',
        cst_logo: '',
        cst_email: '',
        cst_website: '',
        cst_orderlist: [],
    });

    const params = useParams();
    const id = params.id;

    const temp = (id == null) ? "Add" : "Edit";


    useEffect(() => {
        fetch("http://localhost:3001/customer/" + id)
            .then(res => res.json())
            .then(res => setFormData(res));
    }, [])



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        console.log(name)
        console.log(formData.name)
    };

    const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:3001/customer', formData);
    //         console.log(response.data); // Assuming the response will contain the newly added customer data
    //         // Optionally, you can navigate to another page or display a success message here
    //     } catch (error) {
    //         console.error('Error adding customer:', error);
    //         // Optionally, you can display an error message to the user
    //     }
    // };

    return (
        <div className='container'>
            <div className='row p-3 mb-3 border-bottom border-dark border-3 '>
                <div className='col fw-bold '>
                    <span className='fs-1 text-center text-dark'>{temp} Customer Form</span>
                </div>
            </div>

            {/* <form> */}
            <div className='container addcstform p-4'>
                <div className=' row px-3 mt-3 fs-5 fw-bold'>
                    <label className='ps-0 pb-2' htmlFor="cst_name">Customer Name:</label>
                    <input type="text" id="cst_name" name="cst_name" value={formData.cst_name} onChange={handleChange} required />
                </div>
                <div className='row px-3 mt-3 fs-5 fw-bold'>
                    <div className=' col ps-0 '>
                        <label htmlFor="cst_cmp_name">Company Name:</label>
                        <input type="text" id="cst_cmp_name" name="cst_cmp_name" value={formData.cst_cmp_name} onChange={handleChange} required />
                    </div>
                    <div className=' col pe-0'>
                        <label htmlFor="cst_gstno">GST Number:</label>
                        <input type="text" id="cst_gstno" name="cst_gstno" value={formData.cst_gstno} onChange={handleChange} required />
                    </div>
                </div>
                <div className='row px-3 mt-3 fs-5 fw-bold'>
                    <div className='col ps-0 '>
                        <label htmlFor="cst_bankname">Bank Name:</label>
                        <input type="text" id="cst_bankname" name="cst_bankname" value={formData.cst_bankname} onChange={handleChange} required />
                    </div>
                    <div className='col pe-0'>
                        <label htmlFor="cst_bankaccno">Bank Account Number:</label>
                        <input type="number" id="cst_bankaccno" name="cst_bankaccno" value={formData.cst_bankaccno} onChange={handleChange} required />
                    </div>
                </div>
                <div className='row px-3 mt-3 fs-5 fw-bold'>
                    <label className='ps-0 pb-2' htmlFor="cst_logo">Logo:</label>
                    <input type="text" id="cst_logo" name="cst_logo" value={formData.cst_logo} onChange={handleChange} />
                </div>

                <div className='row px-3 mt-3 fs-5 fw-bold'>
                    <label className='ps-0 pb-2' htmlFor="cst_email">Email:</label>
                    <input type="email" id="cst_email" name="cst_email" value={formData.cst_email} onChange={handleChange} required />
                </div>
                <div className='row px-3 mt-3 fs-5 fw-bold'>
                    <label className='ps-0 pb-2' htmlFor="cst_website">Website:</label>
                    <input type="text" id="cst_website" name="cst_website" value={formData.cst_website} onChange={handleChange} />
                </div>
                {/* You can add more fields for cst_orderlist if needed */}
                <div className='row px-3 pt-3 fs-5 fw-bold'>

                    <button type="submit" className='btn btn-dark fs-5 fw-bold' onClick={() => {
                        if (id != null) {
                            axios.put("http://localhost:3001/customer/" + id, formData).
                                then(navigate("/admin/customer"))
                        }
                        else {
                            axios.post("http://localhost:3001/customer", formData).
                                then(navigate("/admin/customer"))
                        }
                    }}>{temp} Customer</button>





                </div>
                {/* </form> */}
            </div>
        </div>
    );
}

export default AddCustomer;
