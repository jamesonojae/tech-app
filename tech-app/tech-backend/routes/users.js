const { Router } = require('express');
const usersController = require('../controller/users');
const router = Router();

router.post('/signup', usersController.createUsers);
router.get('/users', usersController.getUsers);
module.exports = router;
