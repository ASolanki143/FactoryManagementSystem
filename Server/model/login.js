const mongoose = require("mongoose");

let loginScahema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    designation : {
        type : String,
        required : true
    }
})

module.exports = new mongoose.model("login" ,loginScahema);
