const Student = require('../models/student.model');
const AppError = require('../utils/AppError')

exports.createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    next(new AppError(error.message, 400))
  }
};

exports.getStudents = async (req, res, next) => {
  try {
    // 1️⃣ Pagination values
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // 2️⃣ Search logic
    const search = req.query.search;

    const query = search
      ? { name: { $regex: `^${search}`, $options: "i" } }
      : {};

    // 3️⃣ Database query
    const students = await Student.find(query)
      .skip(skip)
      .limit(limit);

    // 4️⃣ Response
    res.status(200).json({
      page,
      limit,
      count: students.length,
      students
    });

  } catch (error) {
    next(new AppError(error.message, 500));
  }
};

exports.getStudentById = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id)

    if (!student) {
      return next(new AppError("Student not found", 404))
    }

    res.status(200).json(student);
  } catch (error) {
    next(new AppError("Invalid student ID", 400))
  }
}

exports.updateStudent = async (req, res, next) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!updatedStudent) {
      return next(new AppError("Student not found", 404))
    }

    res.status(200).json(updatedStudent)
  } catch (error) {
    next(new AppError("Invalid student ID", 400))
  }
}

exports.deleteStudent = async (req, res, next) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id)

    if (!deletedStudent) {
      return next(new AppError("Student not found", 404))
    }
    res.status(200).json({ message: "Student deleted successfully" })
  } catch (error) {
    next(new AppError("Invalid student ID", 400))
  }
}