const User = require("../models/user");

exports.getAllUsers = () => {
  return User.find();
};

exports.createUser = (data) => {
  return User.create(data);
};
