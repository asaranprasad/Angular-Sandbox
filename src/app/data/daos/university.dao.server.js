const mongoose = require("mongoose");
const studentSchema = require("../models/student.schema.server");
const studentModel = mongoose.model("UserModel", studentSchema);
const questionModel = require("../models/question.model.server");
const answerModel = require("../models/answer.model.server");

// data - populate database
const students = [
  {
    _id: 123,
    username: "alice",
    password: "alice",
    firstName: "Alice",
    lastName: "Wonderland",
    gradYear: 2020,
    scholarship: 15000
  },
  {
    _id: 234,
    username: "bob",
    password: "bob",
    firstName: "Bob",
    lastName: "Hope",
    gradYear: 2021,
    scholarship: 12000
  }
];

const questions = [
  {
    _id: 321,
    question: "Is the following schema valid?",
    points: 10,
    questionType: "TRUE_FALSE",
    trueFalse: {
      _id: 1,
      isTrue: false
    }
  },
  {
    _id: 432,
    question: "DAO stands for Dynamic Access Object",
    points: 10,
    questionType: "TRUE_FALSE",
    trueFalse: {
      _id: 2,
      isTrue: false
    }
  },
  {
    _id: 543,
    question: "What does JPA stand for?",
    points: 10,
    questionType: "MULTIPLE_CHOICE",
    trueFalse: {
      _id: 1,
      choices:
        "Java Persistence API, " +
        "Java Persited Application, " +
        "Javascript Persistence API," +
        "JSON Persistent Associations",
      correct: 1
    }
  },
  {
    _id: 654,
    question: "What does ORM stand for?",
    points: 10,
    questionType: "MULTIPLE_CHOICE",
    trueFalse: {
      _id: 2,
      choices:
        "Object Relational Model, " +
        "Object Relative Markup, " +
        "Object Reflexive Model," +
        "Object Relational Mapping",
      correct: 4
    }
  }
];

const answers = [
  {
    _id: 123,
    student: 123,
    question: 321,
    trueFalseAnswer: true
  },
  {
    _id: 234,
    student: 123,
    question: 432,
    trueFalseAnswer: false
  },
  {
    _id: 345,
    student: 123,
    question: 543,
    multipleChoiceAnswer: 1
  },
  {
    _id: 456,
    student: 123,
    question: 654,
    multipleChoiceAnswer: 2
  },
  {
    _id: 567,
    student: 234,
    question: 321,
    trueFalseAnswer: false
  },
  {
    _id: 678,
    student: 234,
    question: 432,
    trueFalseAnswer: true
  },
  {
    _id: 789,
    student: 234,
    question: 543,
    multipleChoiceAnswer: 3
  },
  {
    _id: 890,
    student: 234,
    question: 654,
    multipleChoiceAnswer: 4
  }
];

// truncateDatabase() - removes all the data from the database.
truncateDatabase = () =>
  Promise.all([
    answerModel.remove({}),
    questionModel.remove({}),
    studentModel.remove({})
  ]).then(() => console.log("Database truncated"));

// populateDatabase() - populates the database with test data as described in a later section
populateDatabase = () =>
  Promise.all(
    answers
      .map(answer => answerQuestion(answer))
      .concat(students.map(student => createStudent(student)))
      .concat(questions.map(question => createQuestion(question)))
  ).then(() => console.log("Database populated"));

// createStudent(student) - inserts a student document
createStudent = student =>
  studentModel
    .create(student)
    .then(result => console.log(result))
    .catch(err => console.log(err));

// createQuestion(question) - inserts a question document
createQuestion = () => question =>
  questionModel
    .create(question)
    .then(result => console.log("result: " + result))
    .catch(err => console.log(err));

// answerQuestion(studentId, questionId, answer) - inserts an answer by student student for question question
answerQuestion = answer => answerModel.create(answer);

// findAllStudents() - retrieves all students
findAllStudents = () => studentModel.find();

// findStudentById(id) - retrieves a single student document whose ID is id
findStudentById = id => studentModel.findById(id);

// findAllQuestions() - retrieves all questions
findAllQuestions = () => questionModel.find();

// findQuestionById(id) - retrieves a single question document whose ID is id
findQuestionById = id => questionModel.findById(id);

// findAllAnswers() - retrieves all the answers
findAllAnswers = () => answerModel.find();

// findAnswerById(id) - retrieves a single answer document whose ID is id
findAnswerById = id => answerModel.findById(id);

// findAnswersByStudent(studentId) - retrieves all the answers for a student whose ID is studentId
findAnswersByStudent = id => answerModel.find({ student: id });

// findAnswersByQuestion(questionId) - retrieves all the answers for a question whose ID is questionId
findAnswersByQuestion = id => answerModel.find({ question: id });

module.exports = {
  truncateDatabase,
  populateDatabase,
  createStudent,
  createQuestion,
  answerQuestion,
  findAllStudents,
  findStudentById,
  findAllQuestions,
  findQuestionById,
  findAllAnswers,
  findAnswerById,
  findAnswersByStudent,
  findAnswersByQuestion
};
