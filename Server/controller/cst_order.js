const cstOrderSchema = require("../model/cst_order");

exports.getAllOrder = async (req, res) => {
  try {
    const order = await cstOrderSchema.find();
    if (order) {
      res.status(200).send(order);
    }
    else {
      res.status(400).send("Candidate Issue");
    }
  }
  catch(e){
    res.status(500).send("---Server Issue---");
  }
}

exports.getOrderById = async (req,res) => {
  try{
    const order = await cstOrderSchema.findById(req.params.id);
    if(order){
      res.status(200).send(order);
    }
    else{
      res.status(400).send("Candidate issue");
    }
  }
  catch(e){
    res.status(500).send("--Server Issue--")
  }
}

exports.addCstOrder = async (req,res) => {
  try{
    const order = new cstOrderSchema(req.body);
    // order.order_date.setDate(req.body.order_date)
    console.log(order)
    await order.save();
    if(order){
      res.status(200).send(order);
    }
    else{
      res.status(400).send("Candidate Issue");
    }
  }
  catch(e){
    res.status(500).send("---Server Issue---");
  }
}

exports.editCstOrder = async (req,res) => {
  try{
    console.log(req.params.id);
    const order = await cstOrderSchema.findByIdAndUpdate(req.params.id , req.body , {new : true});
    console.log(order)
    await order.save();
    if(order){
      res.status(200).send(order);
    }
    else{
      res.status(400).send("--Candidate Issue--");
    }
  }
  catch(e){
    res.status(500).send("----Server Issue-----");
  }
}

// Delete an order
exports.deleteorder = async (req, res) => {
  try {
    const order = await cstOrderSchema.findByIdAndDelete(req.params.id);
    if (order == null) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOrderByCstId = async (req , res) => {
  try {
    const order = await cstOrderSchema.find({cst_id : req.params.cst_id})
    if(order){
      res.status(200).send(order);
    }
    else{
      res.status(400).send("User nnndncmdn")
    }
  } 
  catch (e) {
    res.status(500).send("Server  c v df fgnn")
  }
}
