const product = require("../model/product.js");
const productschema = require("../model/product.js");

exports.getAllProduct = async (req,res) => {
    try{
        const product = await productschema.find();
        if(product){
            res.status(200).send(product);
        }
        else{
            res.status(401).send("Invalid Credite")
        }
   }
   catch(e){
        res.status(401).send("Server issue")
   }
}

exports.getProductById = async (req , res) => {
    try{
        const product = await productschema.findById(req.params.id);
        if(product){
            res.status(200).send(product);
        }
        else{
            res.status(401).send("Invalid Credite")
        }
    }
    catch(e){
        res.status(401).send("Server issue")
    }
}

exports.deleteProduct = async (req,res) => {
    try{
        const id = req.params.id;
        console.log(id);
        const product = await productschema.findByIdAndDelete(id);
        // await vendor.delete();
        if(product){
            res.status(200).send("Customer Deleted");
        }
        else{
            res.status(400).send("Candidate Issue");
        }
    }
    catch(e){
        res.status(500).send("----Server Issue----");
    }
}

exports.addProduct = async (req,res) => {
    try {
        const product = new productschema(req.body);
        console.log(product)
        product.save();
        if(product){
            res.status(200).send("Customer Added");
        }
        else{
            res.status(400).send("Candidate Issue");
        }
    } 
    catch(e){
        res.status(500).send("Server Issue");
    }
}

exports.editProduct = async (req,res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const product = await productschema.findByIdAndUpdate(id,req.body,{new : true});
        console.log(product)
        
        await product.save();
        if(product){
            res.status(200).send(product);
        }
        else{
            res.status(400).send("Candidate Issue");
        }
    } 
    catch (e) {
        res.status(500).send("----Server Issue----");
    }
}