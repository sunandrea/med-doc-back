const { User } = require("../../models/users/users.model");

const findUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).json({ message: "Not found" });
  } else {
    res.json(user);
  }
};

module.exports = findUserById;
