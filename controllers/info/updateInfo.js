const { User } = require("../../models/users.model");

const updateUserInfo = async (req, res) => {
  const user = req.user;
  const newData = req.body;

  const newUser = { ...user._doc, ...newData };
  // if (JSON.stringify(user) === JSON.stringify(newUser)) {
  //   return res.status(400).json({ message: "Data not modified" });
  // }
  const updatedUser = await User.findByIdAndUpdate(user._id, newUser, {
    new: true,
  }).select("-password");

  res.status(200).json(updatedUser);
};

module.exports = updateUserInfo;
