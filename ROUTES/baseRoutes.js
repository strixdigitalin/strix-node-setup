const express = require("express");
const router = express.Router();
const upload = require("../Middlewares/Multer");

const { Create, Read, Delete, Update } = require("../CONTROLER/baseControler");

// use this for File route
// router.post("/create", upload.fields([{ name: "image", maxCount: 1 }]), create);

router.post("/create", Create);
router.get("/get", Read);
router.delete("/delete/:id", Delete);
router.put("/update/:id", Update);
// router.patch("/update/:id", update);

module.exports = router;
