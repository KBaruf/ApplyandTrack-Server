const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

const registerUser = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ name: user.name, token });
};
const loginUser = (req, res) => {
  res.send('you are logged in');
};

module.exports = { registerUser, loginUser };
