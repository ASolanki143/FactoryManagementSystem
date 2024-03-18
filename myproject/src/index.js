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
// import AdminMain from './AdminMain';
// import Adm_Customer from './Adm_Customer';
// import AdminHome from './AdminHome';
// import Adm_Placeorder from './Adm_Placeorder';
// import Adm_Vendor from './Adm_Vendor';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Adm_CustomerDetail from './Adm_CustomerDetail';
// import Adm_addcustomer from './Adm_addcustomer';
// import EditCustomer from './Adm_editcustomer';

import Adm_Main from './Admin/Adm_Main/Adm_Main.js';
import Adm_Home from './Admin/Adm_Home/Adm_Home.js';
import Cst_ALlList from './Admin/Cst_AllList/Cst_AllList.js';
import Ven_ALlList from './Admin/Ven_AllList/Ven_AllList.js';
import Cst_ById from './Admin/Cst_ById/Cst_ById.js';
import Cst_Add from './Admin/Cst_Add/Cst_Add.js'
import Ven_ById from './Admin/Ven_ById/Ven_ById.js'
import Ven_Add from './Admin/Ven_Add/Ven_Add.js'
import Ven_Edit from './Admin/Ven_Edit/Ven_Edit.js'
import Cst_Edit from './Admin/Cst_Edit/Cst_Edit.js'
// import EditCustomer from '/Adm_editcustomer';
// import AdminRoute from './AdminRoute';
const router = createBrowserRouter([
    {
        path : "/",
        element : <Login/>
    },
    {
        path : "/admin",
        element : <Adm_Main/>,
        children : [
            {
                path : "/admin",
                element : <Adm_Home/>
            },
            {
                path : "/admin/customer",
                element : <Cst_ALlList/>
            },
            {
                path : "/admin/vendor",
                element : <Ven_ALlList/>
            },
            // {
            //     path : "/admin/placeorder",
            //     element : <Adm_Placeorder/>
            // },
            {
                path : "/admin/customer/:id",
                element: <Cst_ById/>
            },
            {
                path : "/admin/vendor/:id",
                element : <Ven_ById/>
            },
            {
                path : "/admin/addcustomer",
                element : <Cst_Add/>
            },
            {
                path : "/admin/addvendor",
                element : <Ven_Add/>
            },
            {
                path : "/admin/editvendor/:id",
                element: <Ven_Edit/>
            },
            {
                path : "/admin/editcustomer/:id",
                element : <Cst_Edit/>
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
