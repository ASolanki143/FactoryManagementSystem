const mongoose = require("mongoose");


let vendorschema = new mongoose.Schema({
    ven_name : {
        type : String,
        required : true
    },
    ven_password : {
        type : String,
        require : true
    },
    ven_cmp_name : {
        type : String,
        required : true
    },
    ven_gstno : {
        type : String,
        required : true
    },
    ven_bankname : {
        type : String,
        required : true  
    },
    ven_bankaccno : {
        type : Number,
        required : true
    },
    ven_logo : {
        type : String,
        // required : true
    },
    ven_email : {
        type : String,
        required : true
    },
    ven_website : {
        type : String,
        required : true
    },
    ven_orderlist : [
        type = String
    ],

})

module.exports = new mongoose.model("vendor" ,vendorschema);
