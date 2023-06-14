// controllers/students.js
const students = require('../data/students');
const data = require('../../data');
// const data = require('../data/data')

const fs = require("fs");

// GET all students
const getAllStudents = (req, res) => {
  // res.json(students);
  // console.log(data)
  res.json(data);
};

// GET a single student
const getStudentById = (req, res) => {
  const studentId = req.params.id;
  const student = students.find((student) => student.id === studentId);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
};

// POST a new student
const createStudent = (req, res) => {
  const { name, email, phoneNumber, course } = req.body;
  console.log(req.body)
  const newStudent = {
    id: Date.now().toString(),
    name,
    email,
    phoneNumber,
    course,
  };
  data.push(newStudent);
  fs.writeFile("../data.json", JSON.stringify(data), err => {
    // Checking for errors
    if (err) throw err; 
    console.log("Done writing"); // Success
    res.status(200).send({ message: 'Student created' });
  });
  // res.status(200).json(newStudent);
};

// PUT (update) a student
const updateStudent = (req, res) => {
  const studentId = req.params.id;
  const { name, email, phoneNumber, course } = req.body;
  let student = data.find((student) => student.id == studentId);
  if (student) {
    student.name = name;
    student.email = email;
    student.phoneNumber = phoneNumber;
    student.course = course;
    // res.json(student);
    console.log(data)
    // data.push(student)
    fs.writeFile("../data.json", JSON.stringify(data), err => {
      // Checking for errors
      if (err) throw err; 
      console.log("Done writing"); // Success
      res.status(200).send({ message: 'Student updated.' });
    });
  } else {
    res.status(404).json({ message: 'Student not found' });
  }
};

// DELETE a student
const deleteStudent = (req, res) => {
  const studentId = req.params.id;
  const index = data.findIndex((student) => student.id == studentId);
  if (index !== -1) {
    data.splice(index, 1);
    // console.log(data)

    fs.writeFile("../data.json", JSON.stringify(data), err => {
      // Checking for errors
      if (err) throw err; 
      console.log("Done writing"); // Success
      res.status(200).send({ message: 'Student deleted' });
    });

  } else {
    res.status(404).json({ message: 'Student not found' });
  }



};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
