// base index.js sets base url for routes using
// app.use('/api/todos', todoRoutes)

const express = require('express');
const router = express.Router();
const db = require('../models');
const helpers = require("../helpers/todos");

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)

router.route('/:todoId', )
    .get(helpers.getTodo)
    .post(helpers.createTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);




module.exports = router;
    