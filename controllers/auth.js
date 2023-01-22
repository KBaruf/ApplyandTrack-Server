const registerUser = (req, res) => {
  res.send('you are registered');
};
const loginUser = (req, res) => {
  res.send('you are logged in');
};

module.exports = { registerUser, loginUser };
