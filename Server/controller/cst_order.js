const cstOrderSchema = require("../model/cst_order");

exports.addcstorder = async (req, res) => {
    const order = new cstOrderSchema({
      state: req.body.state,
      isComplete: req.body.isComplete || false,
      completeDate: req.body.completeDate,
      isDispatch: req.body.isDispatch || false,
      dispatchDate: req.body.dispatchDate,
      isArrive: req.body.isArrive || true,
      arriveDate: req.body.arriveDate,
      billId: req.body.billId,
    });
  
    try {
      const newOrder = await order.save();
      res.status(201).json(newOrder);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // Update an order
  exports.updateOrder =  async (req, res) => {
    try {
      const order = await cstOrderSchema.findById(req.params.id);
      if (order == null) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      if (req.body.state != null) {
        order.state = req.body.state;
      }
      if (req.body.isComplete != null) {
        order.isComplete = req.body.isComplete;
      }
      if (req.body.completeDate != null) {
        order.completeDate = req.body.completeDate;
      }
      if (req.body.isDispatch != null) {
        order.isDispatch = req.body.isDispatch;
      }
      if (req.body.dispatchDate != null) {
        order.dispatchDate = req.body.dispatchDate;
      }
      if (req.body.isArrive != null) {
        order.isArrive = req.body.isArrive;
      }
      if (req.body.arriveDate != null) {
        order.arriveDate = req.body.arriveDate;
      }
      if (req.body.billId != null) {
        order.billId = req.body.billId;
      }
  
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // Delete an order
  exports.deleteorder = async (req, res) => {
    try {
      const order = await cstOrderSchema.findById(req.params.id);
      if (order == null) {
        return res.status(404).json({ message: 'Order not found' });
      }
      await order.remove();
      res.json({ message: 'Order deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Get all orders
  exports.getAllOrder = async (req, res) => {
    try {
      const orders = await cstOrderSchema.find();
      res.json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Get orders by 'is' fields
  exports.getById = async (req, res) => {
    try{
        const id = req.params._id;
        const order = await cstOrderSchema.findOne({id});
        if(order){
            res.status(200).send(order);
        }
        else{
            res.status(401).send("Invalid Credite");
        }
    }
    catch(e){
        res.status(401).send("Server Issue");
    }
  };