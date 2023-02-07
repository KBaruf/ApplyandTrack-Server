const Job = require('../models/Job');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};
const getJob = (req, res) => {
  res.send('getjob');
};
const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const jobs = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ jobs }).sort('createdAt');
};
const updateJob = (req, res) => {
  res.send('updateJob');
};
const deleteJob = (req, res) => {
  res.send('deleteJob');
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
