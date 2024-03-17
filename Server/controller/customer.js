const cstSchema = require("../model/customer");

exports.getAllCustomer = async (req , res) => {
    try{
        const customers = await cstSchema.find();
        if(customers){
            res.status(200).send(customers);
            console.log(customers)
        }
        else{
            res.status(400).send("Candidate Issue");
        }
    }
    catch(e){
        res.status(500).send("Server Issue")
    }
}

exports.getCustomerById = async (req,res) => {
    try{
        // console.log(req);
        const id = req.params.id;
        console.log(id);
        const customer = await cstSchema.findById({_id : id});
        console.log(customer);
        if(customer){
            res.status(200).send(customer);
        }
        else{
            res.status(400).send("Candidate Issue")
        }
    }
    catch(e){
        res.status(500).send("Server Issue");
    }
}

exports.deleteCustomer = async (req,res) => {
    // try{
    //     const id = req.params.id;
    //     const customer = await cstSchema.findById({_id : id});
    //     await customer.delete();
    //     if(customer){
    //         res.status(200).send("Customer Deleted");
    //     }
    //     else{
    //         res.status(400).send("Candidate Issue");
    //     }
    // }
    // catch(e){
    //     res.status(500).send("Server Issue");
    // }
    try{
        const id = req.params.id;
        console.log(id)
        const customer = await cstSchema.findById(id);
        console.log(customer)
        if(!customer) {
            return res.status(404).send("Customer not found");
        }
        console.log("ooo")
        await customer.deleteOne();
        console.log("sfhgfh")
        res.status(200).send("Customer Deleted");
    }
    catch(e){
        res.status(500).send("Server Issue");
    }
}

exports.addCustomer = async (req,res) => {
    // try {
    //     const customer = new cstSchema(req.body);
    //     console.log("jdhfisdhf")
    //     console.log(customer);
    //     customer.save();
    //     if(customer){
    //         res.status(200).send("Customer Added");
    //     }
    //     else{
    //         res.status(400).send("Candidate Issue");
    //     }
    // } 
    // catch(e){
    //     res.status(500).send("Server Issue");
    // }
    try {
        console.log(req.body)
        const customer = new cstSchema(
            {
                cst_name : req.body.cst_name,
                cst_cmp_name : req.body.cst_cmp_name,
                cst_gstno : req.body.cst_gstno,
                cst_bankname : req.body.cst_bankname,
                cst_bankaccno : req.body.cst_bankaccno,
                cst_logo : req.body.cst_logo,
                cst_email : req.body.cst_email,
                cst_website : req.body.cst_website,
                cst_orderlist : req.body.cst_orderlist
            }
        );
        console.log("--------new customer--------\n",customer)
        if(!customer){
            res.status(404).send("user not found")
        }
        await customer.save();

        res.status(201).json(customer);
    } 
    catch(e){
        res.status(500).send("Server Issue ----");
    }
}

exports.editCustomer = async (req,res) => {
    try {
        const id = req.params._id;
        const customer = await cstSchema.findOne({id});
        customer.cst_name = req.body.cst_name;
        customer.cst_cmp_name =req.body.cst_cmp_name;
        customer.cst_gstno = req.body.cst_gstno;
        customer.cst_bankname = req.body.cst_bankname;
        customer.cst_bankaccno = req.body.cst_bankaccno;
        customer.cst_logo = req.body.cst_logo;
        customer.cst_email = req.body.cst_email;
        customer.cst_website = req.body.cst_website;
        customer.cst_orderlist = req.body.cst_orderlist;

        await customer.save();
        if(customer){
            res.status(200).send(customer);
        }
        else{
            res.status(400).send("Candidate Issue");
        }
    } 
    catch (e) {
        res.status(500).send("Server Issue");
    }
}