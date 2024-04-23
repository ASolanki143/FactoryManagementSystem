// import venOrderSchema, { find, findById } from "../model/ven_order";
const venOrderSchema = require("../model/ven_order")

exports.getAllOrder =  async(req, res) => {
    try {
      const orders = await venOrderSchema.find();
      if(orders){
        res.status(200).json(orders);
      }
      else{
        res.status(404).send("Not found")
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  // Get an order by ID
  exports.getById =  async(req, res) => {
    try {
      const order = await venOrderSchema.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      res.json(order);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  // Add an order
  exports.addOrder =  async (req, res) => {
   try{
    const order = new venOrderSchema(req.body);
    // order.order_date.setDate(req.body.order_date)
    console.log(order)
    order.save();
    if(order){
      res.status(200).send(order);
    }
    else{
      res.status(400).send("Candidate Issue");
    }
   }
   catch(e){
    res.status(500).send("Server Issue ")
   }
  }
  
  // Update an order
  exports.updateOrder =  async (req, res) => {
    try {
      const order = await venOrderSchema.findByIdAndUpdate(req.params.id , req.body , {new : true});
      await order.save();
      if(order){
        res.status(200).send(order);
      }
      else{
        res.status(400).send("Candidate Issue")
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  // Delete an order
  exports.deleteOrder =  async (req, res) => {
    try {
      const order = await venOrderSchema.findByIdAndDelete(req.params.id);
      if (!order) {
        res.status(404).send('Order not found' );
      }
      else{
        res.status(200).send(order);
      }
    } catch (err) {
      res.status(500).send("Server issue");
    }
  }
  