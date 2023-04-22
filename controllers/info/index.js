const currentUser = require("./currentUserInfo");
const findUserById = require("./findById");
const findUsersByRole = require("./findByIRole");
const updateUserInfo = require("./updateInfo");
const UpdateUserRating = require("./updateRating");

module.exports = {
  currentUser,
  findUserById,
  findUsersByRole,
  updateUserInfo,
  UpdateUserRating,
};
