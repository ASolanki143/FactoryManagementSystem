import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Ven_Add.css';

const Ven_Add = () => {
  const [formData, setFormData] = useState({
    ven_name: '',
    ven_cmp_name: '',
    ven_gstno: '',
    ven_bankname: '',
    ven_bankaccno: '',
    ven_logo: '',
    ven_email: '',
    ven_website: '',
    ven_orderlist: []
  });

  let navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const params = useParams();
  const id = params.id;


  useEffect(()=>{
    fetch("http://localhost:3001/vendor/"+id)
    .then(res=>res.json())
    .then(res=>setFormData(res))
  },[])
 

  const temp = (id == null) ? "Add" : "Edit"

  return (
    <div className="container">
      <div className='row p-3 mb-3 border-bottom border-dark border-3 '>
        <div className='col fw-bold '>
          <span className='fs-1 text-center text-dark'>{temp} Vendor Form</span>
        </div>
      </div>

      <div className='container addcstform p-4'>
        <div className=' row px-3 mt-3 fs-5 fw-bold'>
          <label className='ps-0 pb-2'>Vendor Name:</label>
          <input type="text" name="ven_name" value={formData.ven_name} onChange={handleChange} required />
        </div>
        <div className=' row px-3 mt-3 fs-5 fw-bold'>
          <label className='ps-0 pb-2'>Vendor Password</label>
          <input type="text" name="ven_passwrd" value={formData.ven_password} onChange={handleChange} required />
        </div>
        <div className=' row px-3 mt-3 fs-5 fw-bold'>
          <div className='col ps-0'>
            <label className='ps-0 pb-2'>Company Name:</label>
            <input type="text" name="ven_cmp_name" value={formData.ven_cmp_name} onChange={handleChange} required />
          </div>
          <div className='col pe-0'>
            <label className='ps-0 pb-2'>GST NO:</label>
            <input type="text" name="ven_gstno" value={formData.ven_gstno} onChange={handleChange} required />
          </div>
        </div>
        <div className=' row px-3 mt-3 fs-5 fw-bold'>
          <div className='col ps-0'>
            <label className='ps-0 pb-2'>Bank Name:</label>
            <input type="text" name="ven_bankname" value={formData.ven_bankname} onChange={handleChange} required />
          </div>
          <div className='col pe-0'>
            <label className='ps-0 pb-2'>Bank Account No:</label>
            <input type="text" name="ven_bankaccno" value={formData.ven_bankaccno} onChange={handleChange} required />
          </div>
        </div>
        <div className='row px-3 mt-3 fs-5 fw-bold'>
          <label className='ps-0 pb-2'>Email:</label>
          <input type="email" name="ven_email" value={formData.ven_email} onChange={handleChange} required />
        </div>
        <div className='row px-3 pt-3 fs-5 fw-bold'>
          <button type="submit" className='btn btn-dark fs-5 fw-bold' onClick={() => {
            if (id != null) {
              axios.put("http://localhost:3001/vendor/" + id, formData).
                then(navigate("/admin/vendor"))
            }
            else {
              axios.post("http://localhost:3001/vendor", formData).
                then(navigate("/admin/vendor"))
            }
          }}>{temp} Vendor</button>
        </div>
      </div>
    </div>
  );
};

export default Ven_Add;
