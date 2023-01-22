const mongoose = require('mongoose');

const JobsSchema = mongoose.Schema({
  jobs: {
    type: String,
    required: [true, 'You must Provide a job'],
  },
  location: {
    type: String,
    require: [true, 'You must provide a location'],
  },
});

module.exports = mongoose.model('Job', JobsSchema);
