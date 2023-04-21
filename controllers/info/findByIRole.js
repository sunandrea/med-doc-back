const { User } = require("../../models/users/users.model");

const findUsersByRole = async (req, res) => {
  console.log("role");
  const users = await User.find({ role: req.params.role });
  if (!users) {
    res.status(404).json({ message: "Not found" });
  } else {
    res.json(users);
  }
};

module.exports = findUsersByRole;
