const router = require("express").Router();
const venController = require("../controller/vendor")
// router.get("/",);
// router.get("/orderlist",);
// router.get("/bills",);

router.get("/",venController.getAllVendor);
router.get("/:id",venController.getVendorById);
router.post("/",venController.addVendor);
router.delete("/:id",venController.deleteVendor);
router.put("/:id",venController.editVendor);
module.exports = router
