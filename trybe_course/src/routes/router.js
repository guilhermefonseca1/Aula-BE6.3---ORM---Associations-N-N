const express = require('express');
const courseRouter = require('./course.router');

const routers = express.Router();

routers.use('/courses', courseRouter);

module.exports = routers;