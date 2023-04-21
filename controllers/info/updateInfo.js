const { User } = require("../../models/users.model");

const updateUserInfo = async (req, res) => {
  const user = req.user;
  const newData = req.body;

  newUser = { ...user._doc, ...newData };
  if (JSON.stringify(user) === JSON.stringify(newUser)) {
    return res.status(400).json({ message: "Data not modified" });
  }
  await User.findByIdAndUpdate(user._id, newUser);

  res.status(200).json({ message: "Information has been updated" });
};

module.exports = updateUserInfo;
