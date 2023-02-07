const mongoose = require('mongoose');

const JobsSchema = mongoose.Schema({
  company: {
    type: String,
    required: [true, 'Please Provide the Company name'],
    maxlength: 50,
  },
  position: {
    type: String,
    required: [true, 'Please Provide position'],
    maxlength: 50,
  },
  status: {
    type: String,
    enum: ['Please Provide the Company name'],
  },
});

module.exports = mongoose.model('Job', JobsSchema);
