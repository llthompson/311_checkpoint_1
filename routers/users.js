const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')


router.get('/', userController.listUsers);

router.get('/:id', userController.showUser);

router.post('/', userController.create);



  module.exports = router