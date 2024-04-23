const mongoose = require("mongoose");

let ven_order_schema = new mongoose.Schema({
    // orderDetails : [
    //     {
    //         material : String,
    //         thickness : Number,
    //         quantity : Number,
    //     }
    // ],
    material : {
        type : String,
        require : true
    },
    thickness : {
        type : Number,
        require : true
    },
    quantity : {
        type : Number,
        require : true
    },
    order_date : {
        type :Date,
        require : true
    },
    ven_id :{
        type : String,
        required : true
    },
    state : {
        type : String,
        required : false
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
