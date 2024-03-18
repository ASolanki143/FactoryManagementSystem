import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Here you can send the formData to your backend API for processing
  //     console.log(formData);
  //     // Clear the form after submission
  //     setFormData({
  //       ven_name: '',
  //       ven_cmp_name: '',
  //       ven_gstno: '',
  //       ven_bankname: '',
  //       ven_bankaccno: '',
  //       ven_logo: '',
  //       ven_email: '',
  //       ven_website: '',
  //       ven_orderlist: []
  //     });
  //   };

  return (
    <div className="mainForm">
      <div className='heading'>
        <span>Add Vendor Form</span>
      </div>
      <form >
        <div className="item">
          <label>Vendor Name:</label>
          <input
            type="text"
            name="ven_name"
            value={formData.ven_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='company'>
          <div className="item" style={{float : "left"}}>
            <label>Company Name:</label>
            <input
              type="text"
              name="ven_cmp_name"
              value={formData.ven_cmp_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="item" style={{float : "right"}}>
            <label>GST Number:</label>
            <input
              type="text"
              name="ven_gstno"
              value={formData.ven_gstno}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='bank'>
          <div className="item" style={{float : "left"}}>
            <label>Bank Name:</label>
            <input
              type="text"
              name="ven_bankname"
              value={formData.ven_bankname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="item" style={{float : "right" , width:"50%"}}>
            <label>Bank Account Number:</label>
            <input
              type="number"
              name="ven_bankaccno"
              value={formData.ven_bankaccno}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="item">
          <label>
            Logo:
          </label>

          <input
            type="text"
            name="ven_logo"
            value={formData.ven_logo}
            onChange={handleChange}
          />
        </div>
        <div className="item">
          <label>
            Email:
          </label>

          <input
            type="email"
            name="ven_email"
            value={formData.ven_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="item">
          <label>
            Website:
          </label>

          <input
            type="text"
            name="ven_website"
            value={formData.ven_website}
            onChange={handleChange}
            required
          />
        </div>
        <div className="item">
          <button type="submit" onClick={() => {
            console.log("jhvjhvjh", formData)
            // fetch("http://localhost:3001/customer",
            // {
            //     method : "POST",
            //     body : JSON.stringify(formData),
            //     headers : {"Content-Type" : "application/json"}
            // })
            // .then(res=>navigate("/admin/customer"))
            axios.post("http://localhost:3001/vendor/", formData).
              then(navigate("/admin/vendor"))
          }}>Add Vendor</button>
        </div>
      </form>
    </div>
  );
};

export default Ven_Add;
