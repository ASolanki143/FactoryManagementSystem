import React from 'react';
import ReactDOM from 'react-dom/client';

import Login from './login';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Adm_Main from './Admin/Adm_Main/Adm_Main.js';
import Adm_Home from './Admin/Adm_Home/Adm_Home.js';
import Cst_ALlList from './Admin/Cst_AllList/Cst_AllList.js';
import Ven_ALlList from './Admin/Ven_AllList/Ven_AllList.js';
import Cst_ById from './Admin/Cst_ById/Cst_ById.js';
import Cst_Add from './Admin/Cst_Add/Cst_Add.js'
import Ven_ById from './Admin/Ven_ById/Ven_ById.js'
import Ven_Add from './Admin/Ven_Add/Ven_Add.js'
import Ven_Edit from './Admin/Ven_Edit/Ven_Edit.js'
// import Cst_Edit from './Admin/Cst_Edit/Cst_Edit.js'
import ProductAllList from './Admin/Product_AllList/Product_AllList.js';
import AddProduct from './Admin/Product_Add/Product_Add.js';
import Placeorder from './Customer/Cst_PlaceOrder/Cst_PlaceOrder.js'
import OrderReqList from './Admin/Order_Req_List/Order_Req_List.js';

import CustomerMain from './Customer/Cst_Main/Cst_Main.js';
import CstOrderList from './Customer/Cst_OrderList/Cst_OrderList.js';
import CstOrderDetail from './Customer/Cst_OrderDetails/Cst_OrderDetail.js';
import VendorMain from './Vendor/Ven_Main/Ven_Main.js';
import VendorOrderForm from './Admin/Ven_Order/Ven_Order.js';
import AdmCstOrderDetail from './Admin/Cst_Order_Detail/Cst_Order_Detail.js';
import AdmCstOrderList from './Admin/Cst_Order_List/Cst_Order_List.js';
import VenOrderReq from './Vendor/Ven_Order_Req/Ven_Order_Req.js';
import VenOrderList from './Admin/Ven_Order_List/Ven_Order_List.js';
import Ven_VenOrderList from './Vendor/Ven_OrderList/Ven_VenOrderList.js';
import OrderReqDetail from './Admin/Order_Req_Detail/Order_Req_Detail.js';
import Ven_VenOrderDetail from './Vendor/Ven_OrderList_Detail/Ven_OrderList_Detail.js';
import Ven_Order_Detail from './Admin/Ven_Order_Detail/Ven_Order_Detail.js';

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
                element: <Ven_Add/>
            },
            {
                path : "/admin/editcustomer/:id",
                element : <Cst_Add/>
            },
            {
                path : "/admin/productlist",
                element : <ProductAllList/>
            },
            {
                path : "/admin/addproduct",
                element : <AddProduct/>
            },
            {
                path : "/admin/editproduct/:id",
                element : <AddProduct/>
            },
            {
                path : "/admin/placeorder",
                element : <VendorOrderForm/>
            },
            {
                path : "/admin/orderrequest",
                element : <OrderReqList/>
            },
            {
                path : "/admin/orderrequest/:id",
                element : <OrderReqDetail/>
            },
            {
                path : "/admin/customer/:id/:id",
                element : <AdmCstOrderDetail/>
            },
            {
                path : "/admin/customerorder",
                element : <AdmCstOrderList/>
            },
            {
                path : "/admin/vendororder",
                element : <VenOrderList/>
            },
            {
                path : "/admin/vendororder/:id",
                element : <Ven_Order_Detail/>
            }
        ]
    },
    {
        path : "/customer",
        element : <CustomerMain/>,
        children : [
            {
                path : "/customer/home",
                element : <></>
            },
            {
                path : "/customer/placeorder",
                element : <Placeorder/>
            },
            {
                path : "/customer/orderlist",
                element : <CstOrderList/>
            },
            {
                path : "/customer/orderlist/:id",
                element : <CstOrderDetail/>
            },
            {
                path : "/customer/bills",
                element : <></>
            }
        ]

    },
    {
        path : "/vendor",
        element : <VendorMain/>,

        children : [
            {
                path : "/vendor/orderrequest",
                element : <VenOrderReq/>
            },
            {
                path : "/vendor/orderlist",
                element : <Ven_VenOrderList/>
            },
            {
                path : "/vendor/orderlist/:id",
                element : <Ven_VenOrderDetail/>
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
