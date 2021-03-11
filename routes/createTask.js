const express = require('express');
const router = express.Router();
const createTaskController = require('../controllers/createTaskController')

router.post('', createTaskController.addTask);

module.exports = router;