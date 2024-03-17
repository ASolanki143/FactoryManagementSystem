const mongoose = require("mongoose");

let ven_order_schema = new mongoose.Schema({
    orderDetails : [
        {
            material : String,
            thickness : Number,
            quantity : Number,
        }
    ],
    ven_id :{
        type : String,
        required : true
    },
    state : {
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
    is_dispatch : {
        type : Boolean,
        default : false
    },
    dispatch_date : {
        type : Date
    },
    is_arrive : {
        type : Boolean,
        default : false
    },
    arrive_date : {
        type : Date
    },
    bill_id : {
        type : String,
        required : false
    },
    

})

module.exports = new mongoose.model("vendororder" ,ven_order_schema);
