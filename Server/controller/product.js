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
