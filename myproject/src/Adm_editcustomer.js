import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { useParams } from 'react-router-dom';

function EditCustomer() {
    // const { customerId } = useParams(); // Get the customer ID from the URL params
    // const history = useHistory(); // To navigate back after editing

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

    let id = localStorage.getItem("editcst_id");

    useEffect(() => {
        // Fetch customer data based on customer ID
        axios.get(`http://localhost:3001/customer/`+id)
            .then(response => {
                setFormData(response.data); // Set the form data with the fetched customer data
            })
            .catch(error => {
                console.error('Error fetching customer data:', error);
            });
    }, []); // Fetch data when customerId changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send updated customer data to the server for editing
        axios.put(`http://localhost:3001/customer/`+id, formData)
            .then(response => {
                console.log('Customer updated successfully:', response.data);
                // Optionally, you can navigate to another page or display a success message here
                // history.push('/admin/customer'); // Navigate back to customer list page
            })
            .catch(error => {
                console.error('Error updating customer:', error);
                // Optionally, you can display an error message to the user
            });
    };

    return (
        <div>
            <h2>Edit Customer</h2>
            <form onSubmit={handleSubmit}>
                {/* Render form fields with current customer data */}
                <div>
                    <label htmlFor="cst_name">Customer Name:</label>
                    <input type="text" id="cst_name" name="cst_name" value={formData.cst_name} onChange={handleChange} required />
                </div>
                {/* Render other form fields similarly */}
                <button type="submit">Update Customer</button>
            </form>
        </div>
    );
}

export default EditCustomer;
