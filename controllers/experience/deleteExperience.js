const { createError } = require("../../helpers");
const { User } = require("../../models/users.model");

const deleteExperience = async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(req.user._id);
  if (!user) {
    const error = createError(404, "User not found");
    throw error;
  }
  const experienceIndex = user.experience.findIndex(
    (el) => el._id.toString() === id
  );
  if (experienceIndex === -1) {
    const error = createError(404, "Experience not found");
    throw error;
  }
  user.experience.splice(experienceIndex, 1);
  await user.save();
  res.status(200).json(user);
};

module.exports = deleteExperience;
