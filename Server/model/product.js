const mongoose = require("mongoose");

let productschema = new mongoose.Schema({
    material : {
        type : String
    },
    thickness : {
        type : Number
    },
    size : {
        type : String
    },
    price : {
        type : Number
    }
})

module.exports = new mongoose.model("product" ,productschema);
