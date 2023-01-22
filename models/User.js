const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please Provide name'],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    require: [true, 'Please Provide Email'],
    match: [/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Please Provide matching email'],
    unique: true,
    minlength: 3,
    maxlength: 50,
  },
  password: {
    type: String,
    require: [true, 'Please Provide password'],
    minlength: 6,
    maxlength: 15,
  },
});

module.exports = mongoose.model('User', JobsSchema);
