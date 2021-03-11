const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');


router.get('/', homeController.home);
router.use('/delete-task', homeController.delete);
router.use('/create-task', require('./createTask'));

module.exports = router;