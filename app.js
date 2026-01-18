const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/student.routes');
const errorHandler = require('./middlewares/error.middleware')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/students', studentRoutes);

app.use(errorHandler)

module.exports = app;
