const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  course: String,
  age: Number,
});

studentSchema.index({ email: 1 })
studentSchema.index({ name: 1 })

module.exports = mongoose.model('Student', studentSchema);
