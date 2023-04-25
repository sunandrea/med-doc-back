const { User } = require("../../models/users.model");

const updateImage = async (req, res) => {
  const { _id: id } = req.user;

  try {
    const result = await User.updateOne(
      { _id: id },
      { $set: { avatarURL: req.file.path } }
    );

    const updated = result?.modifiedCount
      ? { status: 200, msg: "Аватар успішно оновлено" }
      : { status: 202, msg: "Аватар не був оновлений" };

    res.status(updated.status).json(updated.msg);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Помилка оновлення аватару" });
  }
};

module.exports = updateImage;
