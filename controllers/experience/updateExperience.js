const { createError } = require("../../helpers");
const { User } = require("../../models/users.model");

const updateExperience = async (req, res, next) => {
  const id = req.params.id;
  const { institution, description, startDate, endDate } = req.body;

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
  const oldExperience = user.experience[experienceIndex];
  user.experience[experienceIndex] = {
    institution: institution || oldExperience.institution,
    description: description || oldExperience.description,
    startDate: startDate || oldExperience.startDate,
    endDate: endDate || oldExperience.endDate,
  };

  await user.save();
  res.status(200).json(user.experience[experienceIndex]);
};

module.exports = updateExperience;
