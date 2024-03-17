const AdminSchema = require("../model/admin.js");

exports.getDetails = async(req,res,next)=>{
   try{
        const admin = await AdminSchema.find();
        if(admin){
            res.status(200).send(admin);
        }
        else{
            res.status(401).send("Invalid Credite")
        }
   }
   catch(e){
        res.status(401).send("Server issue")
   }
}

exports.getDetailByID = async(req,res)=>{
    try{
        const id = req.params._id;
        console.log(id);
        const admin = await AdminSchema.findById({id});
        if(admin){
            res.status(200).send(admin);
        }
        else{
            res.status(401).send("Invalid Credite");
        }
    }
    catch(e){
        res.status(401).send("Server Issue gjfhfhd");
    }
}

exports.addAdmin = async(req,res)=>{
    try{
        // const {name,password,bankaccountno,bankname,gstno,mobileno,address,email} = req.body;
        const createAdmin = new AdminSchema(req.body);
        createAdmin.save();
        if(createAdmin){
            res.send(200).send(createAdmin);
        }
        else{
            res.send(401).send("Candidate Issue");
        }
    }
    catch(e){
        res.send(401).send("Server Issue")
    }
}

exports.deleteAdmin = async(req,res)=>{
    try{
        const id = req.params._id;
        const admin = await AdminSchema.findOne({id});
        await admin.delete();
        if(admin){
            res.status(200).send("Admin Deleted!!");
        }
        else{
            res.status(401).send("Candidte Issue");
        }
    }
    catch(e){
        res.send(401).send("Server Issue");
    }
}

