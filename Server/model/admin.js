const mongoose = require("mongoose");

let adminschema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    password : {
        type : String,
        require : true
    },
    bankname : {
        type : String,
        required : true
    },
    bankaccountno : {
        type : Number,
        required : true
    },
    gstno : {
        type : String,
        required : true
    },
    mobileno : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }

})

module.exports = new mongoose.model("admin" ,adminschema);
