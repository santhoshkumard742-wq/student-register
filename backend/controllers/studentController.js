const Student = require("../models/studentModel");

// Register Student
exports.registerStudent = async (req, res) => {
  try {
    // make sure the uploaded file is stored in the profilePhoto field
    const student = new Student({
      ...req.body,
      profilePhoto: req.file ? req.file.filename : null
    });
    await student.save();
    res.json({ message: "Student Registered Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Students
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};