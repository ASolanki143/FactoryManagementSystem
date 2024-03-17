const vndSchema = require("../model/vendor.js");

exports.getAllVendor = async (req , res) => {
    try{
        const vendors = await vndSchema.find();
        if(vendors){
            res.status(200).send(vendors);
        }
        else{
            res.status(400).send("Candidate Issue");
        }
    }
    catch(e){
        res.status(500).send("Server Issue")
    }
}

exports.getVendorById = async (req,res) => {
    try{
        const id = req.params.id;
        console.log(id);
        const vendor = await vndSchema.findById({_id : id});
        if(vendor){
            res.status(200).send(vendor);
        }
        else{
            res.status(400).send("Candidate Issue")
        }
    }
    catch(e){
        res.status(500).send("Server Issue");
    }
}

exports.deleteVendor = async (req,res) => {
    try{
        const id = req.params.id;
        console.log(id);
        const vendor = await vndSchema.findByIdAndDelete(id);
        // await vendor.delete();
        if(vendor){
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

exports.addVendor = async (req,res) => {
    try {
        const vendor = new vndSchema(req.body);
        vendor.save();
        if(vendor){
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

exports.editVendor = async (req,res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const vendor = await vndSchema.findByIdAndUpdate(id,req.body,{new : true});
        console.log(vendor)
        // vendor.ven_name = req.body.ven_name;
        // vendor.ven_cmp_name =req.body.ven_cmp_name;
        // vendor.ven_gstno = req.body.ven_gstno;
        // vendor.ven_bankname = req.body.ven_bankname;
        // vendor.ven_bankaccno = req.body.ven_bankaccno;
        // vendor.ven_logo = req.body.ven_logo;
        // vendor.ven_email = req.body.ven_email;
        // vendor.ven_website = req.body.ven_website;
        // vendor.ven_orderlist = req.body.ven_orderlist;

        await vendor.save();
        if(vendor){
            res.status(200).send(vendor);
        }
        else{
            res.status(400).send("Candidate Issue");
        }
    } 
    catch (e) {
        res.status(500).send("----Server Issue----");
    }
}