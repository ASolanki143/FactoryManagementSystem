const express = require("express");
const router = express.Router();

const adminModel = require("../model/admin.js");
const cutModel = require("../model/customer.js");
const vendor = require("../model/vendor.js");
const venModel = require("../model/vendor.js");
const adminController = require("../controller/admin.js");
const customerController = require("../controller/customer.js");
const venController = require("../controller/vendor.js");
const cstOrderController = require("../controller/cst_order.js")
const venOrderController = require("../controller/ven_order.js")
router.get("/",adminController.getDetails);
router.get("/customer",customerController.getAllCustomer);
router.get("/customer/:id",customerController.getCustomerById);
router.delete("customer/:id",customerController.deleteCustomer);
router.post("/addcustomer",(req,res)=>{
    console.log("fkdjhvkj");
    customerController.addCustomer
})


router.get("/vendor",venController.getAllVendor);
router.get("/cstorderlist",cstOrderController.getAllOrder);
router.get("/venorderlisr",venOrderController.getAllOrder)
router.get("/:id",adminController.getDetailByID)
// router.get("/orderlist",);
// router.get("/orderrequest",);
// router.post("/placeorder",);

module.exports = router
