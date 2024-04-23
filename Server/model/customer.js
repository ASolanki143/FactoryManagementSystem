const mongoose = require("mongoose");

let customerschema = new mongoose.Schema({
    cst_name : {
        type : String,
        required : true
    },
    cst_password : {
        type : String,
        require : true
    },
    cst_cmp_name : {
        type : String,
        required : true
    },
    cst_gstno : {
        type : String,
        required : true
    },
    cst_bankname : {
        type : String,
        required : true  
    },
    cst_bankaccno : {
        type : Number,
        required : true
    },
    cst_logo : {
        type : String,
        // required : true
    },
    cst_email : {
        type : String,
        required : true
    },
    cst_website : {
        type : String,
        // required : true
    },
    cst_orderlist : [
        type = String
    ],

})

module.exports = new mongoose.model("customer" ,customerschema);
