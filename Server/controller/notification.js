const noti_schema = require("../model/notification");

exports.getAll = async (req , res) => {
    try{
        const notification = await noti_schema.find();
        if(notification){
            res.status(200).send(notification);
        }
        else{
            res.status(400).send("Candidate Issue");
        }
    }
    catch(e){
        res.status(500).send("Srever Issue")
    }
}

exports.getById = async (req , res) => {
    try{
        const notification = await noti_schema.findById(req.params.id);
        if(notification){
            res.status(200).send(notification);
        }
        else{
            res.status(400).send("Candidate Issue");
        }
    }
    catch(e){
        res.status(500).send("Srever Issue")
    }
}

exports.addNotification = async (req , res) => {
    try{
        const notification = new noti_schema(req.body);
        await notification.save();
        if(notification){
            res.status(200).send("Notification Added")
        }
        else{
            res.status(400).send("Candidate Issue")
        }
    }
    catch(e){
        res.status(500).send("Srever Issue")
    }
}

exports.editNotification = async (req , res) => {
    try{
        const notification = await noti_schema.findByIdAndUpdate(req.params.id , req.body , {new : true})
        await notification.save();
        if(notification){
            res.status(200).send(notification);
        }else{
            res.status(400).send("Candidate Issue")
        }
    }
    catch(e){
        res.status(500).send("Srever Issue")
    }
}

exports.deleteNotification = async (req , res) => {
    try{
        const notification = await noti_schema.findByIdAndDelete(req.params.id);
        if(notification){
            res.status(200).send(notification);
        }else{
            res.status(400).send("Candidate Issue")
        }
    }
    catch(e){
        res.status(500).send("Srever Issue")
    }
}