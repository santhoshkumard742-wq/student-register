    const express = require("express");
    const router = express.Router();
    const studentController = require("../controllers/studentController");
    const upload = require("../config/image");

    // field name must match the <input> name in the HTML form
    router.post("/register", upload.single("profilePhoto"), studentController.registerStudent);
    router.get("/students", studentController.getStudents);

    module.exports = router;