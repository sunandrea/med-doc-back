const { createError } = require("../helpers");
const User = require("../models/users/users.model");

const logout = async (id) => {
  const existingUser = await await User.findById(id);
  if (!existingUser) {
    throw createError(404, "User not found");
  }

  return await User.findByIdAndUpdate(
    id,
    { token: null },
    { new: true }
  ).select("-password");
};

module.exports = logout;
