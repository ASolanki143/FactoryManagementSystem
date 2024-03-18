// import logo from '../..//logofull.png';
import logo from '../../images/logofull.png';
import './Adm_Main.css';
import { Link, Outlet } from 'react-router-dom';
// import { useEffect, useState } from 'react';

function AdminMain() {
    
    return (
       
        <div class="main">
            <header>
                <div class="logoh">
                    <img src={logo} alt=""></img>
                </div>
                <div id="pp">

                </div>
                <span id="name">
                    Ayush Solanki
                </span>
            </header>
            <nav>
                <ul>
                    <li><Link to="/admin">Home</Link></li>
                    <li><Link to="/admin/customer">Customers</Link></li>
                    <li><Link to="/admin/vendor">Vendors</Link></li>
                    <li><Link to="/admin/orderrequest">Order Request</Link></li>
                    <li><Link to="/admin/orderlist">Order List</Link></li>
                    <li><Link to="admin/placeorder">Place Order</Link></li>
                    <li><Link to="/admin/addcustomer">Add Customer</Link></li>
                    <li><Link to="/admin/addvendor">Add Vendor</Link></li>

                </ul>
            </nav>
            <div className='pb-5 container'>
                <Outlet />

            </div>
        </div>
    );
}

export default AdminMain;