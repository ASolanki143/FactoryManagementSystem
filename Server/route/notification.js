const router = require("express").Router();
const notiController = require("../controller/notification")

router.get("/",notiController.getAll)
router.get("/:id",notiController.getById)
router.post("/",notiController.addNotification)
router.put("/:id",notiController.editNotification)
router.delete("/:id",notiController.deleteNotification)

module.exports = router
