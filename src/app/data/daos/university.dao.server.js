const mongoose = require("mongoose");
const studentSchema = require("../models/student.schema.server");
const studentModel = mongoose.model("UserModel", studentSchema);
module.exports = studentModel;
