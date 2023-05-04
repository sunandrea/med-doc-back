const { createError } = require("../../helpers");
const { User } = require("../../models/users.model");

const updateImage = async (req, res) => {
  const { _id: id } = req.user;

  try {
    const result = await User.findByIdAndUpdate(
      { _id: id },
      { $set: { avatarURL: req.file.path } },
      { new: true }
    ).select("-password");

    if (!result) {
      const error = createError(404, "User not found");
      throw error;
    }

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Помилка оновлення аватару" });
  }
};

module.exports = updateImage;
