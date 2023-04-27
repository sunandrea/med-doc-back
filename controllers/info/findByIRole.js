const { createError } = require("../../helpers");
const { User } = require("../../models/users.model");

const findUsersByRole = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 0;

  const skipSize = (page - 1) * limit;
  const role = req.params.role;

  if (role !== "Doctor" && role !== "Patient") {
    const error = createError(404, "bad req params");
    throw error;
  }
  const users = await User.find({ role: req.params.role })
    .skip(skipSize)
    .limit(limit);
  if (!users) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(users);
};

module.exports = findUsersByRole;
