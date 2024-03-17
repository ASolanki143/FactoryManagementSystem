import React from 'react';
import ReactDOM from 'react-dom/client';
// import Login from './login';
// import Login from './login';
// import AdminMain from './AdminMain';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

// import App from './App.js';

// import AdminRoute from './AdminRoute.js';
import Login from './login';
import AdminMain from './AdminMain';
import Adm_Customer from './Adm_Customer';
import AdminHome from './AdminHome';
import Adm_Placeorder from './Adm_Placeorder';
import Adm_Vendor from './Adm_Vendor';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Adm_CustomerDetail from './Adm_CustomerDetail';
import Adm_addcustomer from './Adm_addcustomer';
import EditCustomer from './Adm_editcustomer';
// import EditCustomer from '/Adm_editcustomer';
// import AdminRoute from './AdminRoute';
const router = createBrowserRouter([
    {
        path : "/",
        element : <Login/>
    },
    {
        path : "/admin",
        element : <AdminMain/>,
        children : [
            {
                path : "/admin/",
                element : <AdminHome/>
            },
            {
                path : "/admin/customer",
                element : <Adm_Customer/>
            },
            {
                path : "/admin/vendor",
                element : <Adm_Vendor/>
            },
            {
                path : "/admin/placeorder",
                element : <Adm_Placeorder/>
            },
            {
                path : "/admin/customer/:id",
                element: <Adm_CustomerDetail/>
            },
            {
                path : "/admin/addcustomer",
                element : <Adm_addcustomer/>
            },
            {
                path : "/admin/editcustomer",
                element : <EditCustomer/>
            }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
