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

  // academic / course information
  education: String,            // corresponds to <select name="education">
  department: String,
  passedOutYear: Number,        // previously 'year'
  course: String,

  city: String,
  state: String,

  profilePhoto: String,

  // parent/family info
  fatherName: String,           // previously parentName
  fatherPhone: String,          // previously parentPhone

  bloodGroup: String,
  idProofNumber: String,

  // legacy fields left for compatibility
  year: String,
  rollNumber: String,
  admissionDate: String,
  nationality: String
});

module.exports = mongoose.model("Student", studentSchema);