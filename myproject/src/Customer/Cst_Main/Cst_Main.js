// import logo from '../..//logofull.png';
import logo from '../../images/logofull.png';
import './Cst_Main.css';
import { Link, Outlet } from 'react-router-dom';
// import { useEffect, useState } from 'react';

function CustomerMain() {
    
    return (
       
        <div class="main">
            <header>
                <div class="logoh">
                    <img src={logo} alt=""></img>
                </div>
                <div id="pp">

                </div>
                <span id="name">
                   Ronak Thesiya
                </span>
            </header>
            <nav>
                <ul>
                    {/* <li><Link to="/customer">Home</Link></li> */}
                    <li><Link to="/customer/placeorder">Place Order</Link></li>
                    <li><Link to="/customer/orderlist">Order List</Link></li>
                    {/* <li><Link to="/customer/bills">Bills</Link></li> */}
                </ul>
            </nav>
            <div className='pb-5 container'>
                <Outlet />

            </div>
        </div>
    );
}

export default CustomerMain;