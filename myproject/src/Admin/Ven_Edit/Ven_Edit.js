import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function EditVendorForm (){
  const [formData, setFormData] = useState({});

  let id = localStorage.getItem("editven_id")
  console.log("--------edit id -",id)
//   axios.get("http://localhost:3001/vendor/"+id)
//   .then(res=>res.json)
//   .then(res=>setFormData(res));

useEffect(()=>{
    fetch("http://localhost:3001/vendor/"+id)
    .then(res=>res.json())
    .then(res=>setFormData(res));
},[])

  console.log("-----data",formData);

//   useEffect(() => {
//     setFormData(vendorData);
//   }, [vendorData]);

    const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
        axios.put("http://localhost:3001/vendor/"+id,formData)
            .then(navigate("/admin/vendor"))

  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Vendor Name:
          <input
            type="text"
            name="ven_name"
            value={formData.ven_name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Company Name:
          <input
            type="text"
            name="ven_cmp_name"
            value={formData.ven_cmp_name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          GST Number:
          <input
            type="text"
            name="ven_gstno"
            value={formData.ven_gstno}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Bank Name:
          <input
            type="text"
            name="ven_bankname"
            value={formData.ven_bankname}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Bank Account Number:
          <input
            type="number"
            name="ven_bankaccno"
            value={formData.ven_bankaccno}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Logo:
          <input
            type="text"
            name="ven_logo"
            value={formData.ven_logo}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="ven_email"
            value={formData.ven_email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Website:
          <input
            type="text"
            name="ven_website"
            value={formData.ven_website}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <button type="submit" 
        >Update Vendor</button>
      </div>
    </form>
  );
};

export default EditVendorForm;
