const router = require("express").Router();
const venOrder = require("../controller/ven_order")
router.get("/",venOrder.getAllOrder);
router.get("/:id",venOrder.getById);
router.post("/",venOrder.addOrder);
router.put("/:id",venOrder.updateOrder);
router.delete("/:id",venOrder.deleteOrder);

module.exports = router
