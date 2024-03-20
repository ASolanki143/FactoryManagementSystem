import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const EditCustomerForm = () => {
  const [formData, setFormData] = useState({});

  const params = useParams();
 
  const id = params.id
  console.log("----------ID",id)
  useEffect(() => {
    fetch("http://localhost:3001/customer/"+id)
    .then(res=>res.json())
    .then(res=>setFormData(res));
  }, []);

  console.log("---------data",formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:3001/customer/"+id,formData)
    .then(navigate("/admin/customer"))
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Customer Name:
          <input
            type="text"
            name="cst_name"
            value={formData.cst_name}
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
            name="cst_cmp_name"
            value={formData.cst_cmp_name}
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
            name="cst_gstno"
            value={formData.cst_gstno}
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
            name="cst_bankname"
            value={formData.cst_bankname}
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
            name="cst_bankaccno"
            value={formData.cst_bankaccno}
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
            name="cst_logo"
            value={formData.cst_logo}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="cst_email"
            value={formData.cst_email}
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
            name="cst_website"
            value={formData.cst_website}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <button type="submit">Update Customer</button>
      </div>
    </form>
  );
};

export default EditCustomerForm;
