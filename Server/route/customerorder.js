const router = require("express").Router();
const cstOrder = require("../controller/cst_order")
router.get("/",cstOrder.getAllOrder);
router.get("/:id",cstOrder.getOrderById);
router.get("/:cst_id",cstOrder.getOrderByCstId);

router.post("/",cstOrder.addCstOrder);
router.put("/:id",cstOrder.editCstOrder);
router.delete("/:id",cstOrder.deleteorder);

module.exports = router
