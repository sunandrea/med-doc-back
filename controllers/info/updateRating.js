const { User } = require("../../models/users.model");

const UpdateUserRating = async (req, res) => {
  const user = req.user;
  const newRating = req.body.rating;
  if (Number(user.rating) === Number(newRating)) {
    return res.status(400).json({ message: "Rating not modified" });
  }
  user.rating = newRating;
  await user.save();
  res.status(200).send(user);
};

module.exports = UpdateUserRating;
