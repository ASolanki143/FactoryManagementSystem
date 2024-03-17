const mongoose = require("mongoose");

let noti_schema = new mongoose.Schema({
    user_id : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    user_type : {
        type : String,
        required : true
    }
})

module.exports = new mongoose.model("notification" ,noti_schema);
