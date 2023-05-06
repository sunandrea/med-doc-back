const { createError } = require("../../helpers");
const { User } = require("../../models/users.model");

const updateImage = async (req, res) => {
  const { _id: id } = req.user;
  if (!req.file) {
    const error = createError(400, "No file");
    throw error;
  }

  if (!req.user) {
    const error = createError(401, "User not authenticated");
    throw error;
  }
  const result = await User.findByIdAndUpdate(
    { _id: id },
    { $set: { avatarURL: req.file.path } },
    { new: true }
  ).select("-password");

  if (!result) {
    const error = createError(404, "User not found");
    throw error;
  }

  res.status(200).json(result);
};

module.exports = updateImage;
