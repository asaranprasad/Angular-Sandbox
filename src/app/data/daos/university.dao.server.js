const mongoose = require("mongoose");
const studentSchema = require("../models/student.schema.server");
const studentModel = mongoose.model("UserModel", studentSchema);

// truncateDatabase() - removes all the data from the database.
truncateDatabase = () => studentModel.find();

// populateDatabase() - populates the database with test data as described in a later section
populateDatabase = () => studentModel.find();

// createStudent(student) - inserts a student document
createStudent = () => studentModel.find();

// createQuestion(question) - inserts a question document
createQuestion = () => studentModel.find();

// answerQuestion(studentId, questionId, answer) - inserts an answer by student student for question question
answerQuestion = () => studentModel.find();

// findAllStudents() - retrieves all students
findAllStudents = () => studentModel.find();

// findStudentById(id) - retrieves a single student document whose ID is id
findStudentById = id => studentModel.find();

// findAllQuestions() - retrieves all questions
findAllQuestions = () => studentModel.find();

// findQuestionById(id) - retrieves a single question document whose ID is id
findQuestionById = id => studentModel.find();

// findAllAnswers() - retrieves all the answers
findAllAnswers = () => studentModel.find();

// findAnswerById(id) - retrieves a single answer document whose ID is id
findAnswerById = id => studentModel.find();

// findAnswersByStudent(studentId) - retrieves all the answers for a student whose ID is studentId
findAnswersByStudent = studentId => studentModel.find();

// findAnswersByQuestion(questionId) - retrieves all the answers for a question whose ID is questionId
findAnswersByQuestion = questionId => studentModel.find();

module.exports = studentModel;
