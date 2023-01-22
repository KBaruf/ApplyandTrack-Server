const Jobs = require('../models/Job');
const getAllJobs = (req, res) => {
  res.send('getalljob');
};
const getJob = (req, res) => {
  res.send('getjob');
};
const createJob = (req, res) => {
  const jobs = Jobs.create(req.body);
  res.json({ jobs });
};
const updateJob = (req, res) => {
  res.send('updateJob');
};
const deleteJob = (req, res) => {
  res.send('deleteJob');
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
