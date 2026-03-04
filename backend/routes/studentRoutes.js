const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const upload = require("../config/image");

router.post("/register", upload.single("image"), studentController.registerStudent);
router.get("/students", studentController.getStudents);

module.exports = router;