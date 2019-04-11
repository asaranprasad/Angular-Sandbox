const mongoose = require("mongoose");
const questionSchema = require("./question.schema.server");
const questionWidgetSchema = mongoose.Schema(
  {
    _id: Number,
    questions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionModel"
      }
    ]
  },
  { collection: "question-widgets" }
);
module.exports = questionWidgetSchema;
