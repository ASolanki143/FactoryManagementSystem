// import venOrderSchema, { find, findById } from "../model/ven_order";
const venOrderSchema = require("../model/ven_order")

exports.getAllOrder =  async(req, res) => {
    try {
      const orders = await find();
      res.json(orders);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  
  // Get an order by ID
  exports.getById =  async(req, res) => {
    try {
      const order = await findById(req.params.id);
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
    const order = new venOrderSchema({
      orderDetails: req.body.orderDetails,
      venId: req.body.venId,
      state: req.body.state,
      isApprove: req.body.isApprove || false,
      approveDate: req.body.approveDate,
      isDispatch: req.body.isDispatch || false,
      dispatchDate: req.body.dispatchDate,
      isArrive: req.body.isArrive || false,
      arriveDate: req.body.arriveDate,
      billId: req.body.billId,
    });
  
    try {
      const newOrder = await order.save();
      res.status(201).json(newOrder);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  
  // Update an order
  exports.updateOrder =  async (req, res) => {
    try {
      const order = await findById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      // Update order fields
      order.orderDetails = req.body.orderDetails || order.orderDetails;
      order.venId = req.body.venId || order.venId;
      order.state = req.body.state || order.state;
      order.isApprove = req.body.isApprove || order.isApprove;
      order.approveDate = req.body.approveDate || order.approveDate;
      order.isDispatch = req.body.isDispatch || order.isDispatch;
      order.dispatchDate = req.body.dispatchDate || order.dispatchDate;
      order.isArrive = req.body.isArrive || order.isArrive;
      order.arriveDate = req.body.arriveDate || order.arriveDate;
      order.billId = req.body.billId || order.billId;
  
      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
  
  // Delete an order
  exports.deleteOrder =  async (req, res) => {
    try {
      const order = await findById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
      await order.remove();
      res.json({ message: 'Order deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  