const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')


router.get('/', userController.list);

router.get('/:_id', userController.show);

router.post('/', userController.create);



  module.exports = router