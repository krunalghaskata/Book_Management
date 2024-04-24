const signup = require("./signup.js");
const login = require("./login.js");
const userId = require("./userGet.js")
const allUser = require('./allUser.js')
const updateUser = require('./updateUser.js')
const deleteUser = require('./deleteUser.js')
const logOut  = require('./logOut.js')
const forgotPassword   = require('./forgotPassword.js')
const resetPassword = require('./resetPassword.js');
const updatedPassword = require('./updatedPassword.js')
module.exports = {
  signup,
  login,
  userId,
  allUser,
  updateUser,
  deleteUser,
  logOut,
  forgotPassword,
  resetPassword,
  updatedPassword
};