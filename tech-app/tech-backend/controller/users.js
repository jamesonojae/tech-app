const util = require('util');
const signUpModelsCopy = require('../models/signUpModels');

exports.createUsers = async (req, res) => {
  try {
    const signedUpUser = await new signUpModelsCopy({
      fullName: req.body.fullName,
      userName: req.body.userName,
      password: req.body.password,
      email: req.body.email
    });

    signedUpUser.save();
    res.send(signedUpUser);
  } catch (error) {
    console.error(error);
  }
};

exports.getUsers = async (request, response) => {
  try {
    console.log('user routes');
  } catch (error) {
    console.log(err);
    response.status(500).send({ message: 'server Error' });
  }
};
