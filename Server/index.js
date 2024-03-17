const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminroute = require("./route/admin");
const customerroute = require("./route/customer");
const vendorroute = require("./route/vendor");
const bodyParser = require("body-parser");
const customerController = require("./controller/customer")
const app = express();
const PORT = 3001;

mongoose.connect("mongodb+srv://ayushsolanki1403:ayushfactory143@factory.ohiwcqc.mongodb.net/?retryWrites=true&w=majority&appName=factory")
.then(()=>{
    app.use(cors());
    
    app.use(bodyParser.urlencoded({extended:false}));
    // app.post("customer/addcustomer",customerController.addCustomer)
    app.use("/",adminroute);
    app.use("/customer",customerroute);
    app.use("/vendor",vendorroute);

    app.listen(PORT , () => {
        console.log("Server Started");
    })
})


