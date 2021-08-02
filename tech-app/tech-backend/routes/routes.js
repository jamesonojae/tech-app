const express = require('express');
const router = express.Router();
const signUpModelsCopy = require('../models/signUpModels');

router.post('/signup', (req, res) => {
  try {
    const signedUpUser = new signUpModelsCopy({
      fullName: req.body.fullName,
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email,
      date: req.body.date
    });
    res.send(signedUpUser);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
