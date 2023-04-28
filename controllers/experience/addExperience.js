const { createError } = require("../../helpers");
const { User } = require("../../models/users.model");

const addExperience = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (!user) {
    const error = createError(404, "User not found");
    throw error;
  }

  user.experience.push(req.body);
  await user.save();
  const { password, ...newUser } = user._doc;
  res.status(201).send(newUser);
};

module.exports = addExperience;
