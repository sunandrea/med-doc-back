const { User } = require("../../models/users.model");

const updateImage = async (req, res) => {
  const { _id: id } = req.user;
  await User.updateOne({ _id: id }, { $set: { avatarURL: req.file.path } });
  res.status(201).json({
    msg: "Аватар успішно оновлено",
  });
};

module.exports = updateImage;
