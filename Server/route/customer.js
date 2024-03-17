const router = require("express").Router();
const productController = require("../controller/product")
const customerController = require("../controller/customer")
// router.get("/",);
// router.get("/orderlist",);
// router.post("/orderrequest",);
// router.get("/bills",);

router.get("/:id",customerController.getCustomerById)
router.get("/",customerController.getAllCustomer);
router.delete("/:id",customerController.deleteCustomer)
router.post("/",customerController.addCustomer);
router.put("/:id",customerController.editCustomer);
module.exports = router
 