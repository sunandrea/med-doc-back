const currentUser = require("./currentUserInfo");
const findUserById = require("./findById");
const findUsersByRole = require("./findByIRole");
const updateImage = require("./updateImage");
const updateUserInfo = require("./updateInfo");
const updateUserRating = require("./updateRating");

module.exports = {
  currentUser,
  findUserById,
  findUsersByRole,
  updateUserInfo,
  updateUserRating,
  updateImage,
};
