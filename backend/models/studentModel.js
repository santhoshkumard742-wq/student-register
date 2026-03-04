const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

  firstName: String,
  lastName: String,
  age: Number,
  gender: String,
  dob: String,

  email: String,
  phone: String,
  address: String,

  course: String,
  department: String,
  year: String,
  rollNumber: String,
  admissionDate: String,

  profilePhoto: String,
  parentName: String,
  parentPhone: String,
  bloodGroup: String,
  nationality: String,
  idProofNumber: String

});

module.exports = mongoose.model("Student", studentSchema);