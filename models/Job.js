const mongoose = require('mongoose');

const JobsSchema = mongoose.Schema(
  {
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
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobsSchema);
