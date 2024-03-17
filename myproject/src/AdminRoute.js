import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminMain from "./AdminMain";
import AdminHome from "./AdminHome";
import Adm_Customer from "./Adm_Customer";
import Adm_Vendor from "./Adm_Vendor";
import Adm_Placeorder from "./Adm_Placeorder";
import Login from "./login.js";
export default function AdminRoute(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}>
                    <Route index element={<AdminHome/>}/>
                    <Route path="/customer" element={<Adm_Customer/>}/>
                    <Route path="/vendor" element={<Adm_Vendor/>}/>
                    <Route path="/placeorder" element={<Adm_Placeorder/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}