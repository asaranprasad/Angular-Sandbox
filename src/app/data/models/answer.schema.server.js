const mongoose = require("mongoose");
const student = require("./student.schema.server");
const question = require("./question.schema.server");
mongoose.model("studentModel", student);
mongoose.model("questionModel", question);

const answer = mongoose.Schema(
  {
    _id: Number,
    trueFalseAnswer: Boolean,
    multipleChoiceAnswer: Number,
    student: { type: mongoose.Schema.Types.Number, ref: "studentModel" },
    question: { type: mongoose.Schema.Types.Number, ref: "questionModel" }
  },
  { collection: "answers" }
);

module.exports = answer;
