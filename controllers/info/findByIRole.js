const { createError } = require("../../helpers");
const { User } = require("../../models/users.model");

const findUsersByRole = async (req, res) => {
  console.log("role");
  if (req.params !== "Doctor" || req.params !== "Patient") {
    const error = createError(404, "bad req params");
    throw error;
  }
  const users = await User.find({ role: req.params.role });
  if (!users) {
    res.status(404).json({ message: "Not found" });
  } else {
    res.json(users);
  }
};

module.exports = findUsersByRole;
