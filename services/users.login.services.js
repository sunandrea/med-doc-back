const bcrypt = require("bcryptjs");
const User = require("../models/users/users.model");
const { createError } = require("../helpers");
const helpers = require("../helpers/index");

const login = async ({ number, password }) => {
  const existingUser = await User.findOne({ number });
  if (
    !existingUser ||
    !(await bcrypt.compare(password, existingUser.password))
  ) {
    throw createError(401, "Number and/or password is wrong");
  }

  //   if (!existingUser.verify) {
  //     throw createError(401, "User is not verified");
  //   }
  const id = existingUser._id;

  const payload = {
    id,
  };

  const token = helpers.sign(payload);
  await User.updateById(id, { token });
  return { token };
};

module.exports = login;
