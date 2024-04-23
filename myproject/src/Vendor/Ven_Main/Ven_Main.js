// import logo from '../..//logofull.png';
import logo from '../../images/logofull.png';
import './Ven_Main.css';
import { Link, Outlet } from 'react-router-dom';
// import { useEffect, useState } from 'react';

function VendorMain() {
    const venname = localStorage.getItem("venname");
    
    return (
       
        <div class="main">
            <header>
                <div class="logoh">
                    <img src={logo} alt=""></img>
                </div>
                <div id="pp">
                   
                </div>
                <span id="name">
                {venname}
                </span>
            </header>
            <nav>
                <ul>
                    {/* <li><Link to="/customer">Home</Link></li> */}
                    <li><Link to="/vendor/orderrequest">Order Request</Link></li>
                    <li><Link to="/vendor/orderlist">Order List</Link></li>
                    {/* <li><Link to="/customer/bills">Bills</Link></li> */}
                </ul>
            </nav>
            <div className='pb-5 container'>
                <Outlet />

            </div>
        </div>
    );
}

export default VendorMain;