const mongoose = require('mongoose');

const signUpModels = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// mongoose mode takes('table name', schemaName created)
module.exports = mongoose.model('mytable', signUpModels);
// module.exports = mytable;
