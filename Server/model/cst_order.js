const mongoose = require("mongoose");

let cst_order_schema = new mongoose.Schema({

    orderDetails : [
        {
            product_id : {
                type : String,
            },
            quantity : {
                type : Number
            }
        }
    ],
    order_date : {
        type : Date,
        // required : true
    },
    cst_id :{
        type : String,
        required : true
    },
    is_approve : {
        type : Boolean,
        default : false
    },
    approve_date : {
        type : Date
    },
    is_reject : {
        type : Boolean,
        default : false
    },
    reject_date : {
        type : Date
    },
    state : {
        type : String,
        // required : true
    },
    is_Complete : {
        type : Boolean,
        default : false
    },
    complete_date : {
        type : Date
    },
    is_dispatch : {
        type : Boolean,
        default : false
    },
    dispatch_date : {
        type : Date
    },
    is_arrive : {
        type : Boolean,
        default : true
    },
    arrive_date : {
        type : Date
    },
    bill_id : {
        type : String,
        required : false
    },
})

module.exports = new mongoose.model("customerorder" ,cst_order_schema);
