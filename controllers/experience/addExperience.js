const { createError } = require("../../helpers");
const { User } = require("../../models/users.model");

const addExperience = async (req, res, next) => {
  console.log(req.user._id);
  const user = await User.findById(req.user._id);
  if (!user) {
    const error = createError(404, "User not found");
    throw error;
  }

  user.experience.push(req.body);
  await user.save();
  res.status(201).send(user);
};

module.exports = addExperience;
