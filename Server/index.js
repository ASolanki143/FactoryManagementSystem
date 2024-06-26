const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminroute = require("./route/admin");
const customerroute = require("./route/customer");
const vendorroute = require("./route/vendor");
const bodyParser = require("body-parser");
const customerController = require("./controller/customer")
const productroute = require("./route/product")
const customerorderroute = require("./route/customerorder")
const vendororderroute = require("./route/vendororder")
const notiroute = require("./route/notification")
const app = express();
const PORT = 3001;

mongoose.connect("mongodb+srv://ayushsolanki1403:ayushfactory143@factory.ohiwcqc.mongodb.net/?retryWrites=true&w=majority&appName=factory")
.then(()=>{
    app.use(cors());
    app.use(express.json())
    
    app.use(bodyParser.urlencoded({extended:false}));
    // app.post("customer/addcustomer",customerController.addCustomer)
    app.use("/admin",adminroute);
    app.use("/customer",customerroute);
    app.use("/vendor",vendorroute);
    app.use("/product",productroute);
    app.use("/customerorder",customerorderroute)
    app.use("/vendororder",vendororderroute)
    app.use("/notification",notiroute)
    app.listen(PORT , () => {
        console.log("Server Started");
    })
})


