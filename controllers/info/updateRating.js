const { default: mongoose } = require("mongoose");
const { User } = require("../../models/users.model");
const { createError } = require("../../helpers");

const updateUserRating = async (req, res) => {
  const user = req.user;
  const newRating = req.body.rating;
  const objectId = mongoose.Types.ObjectId.createFromHexString(req.params.id);

  const doctor = await User.findById(objectId);
  const currentUserRating = doctor.allRating.find(
    (element) => element.user.toString() === user._id.toString()
  );
  if (!doctor) {
    const error = createError(404, "User not found");
    throw error;
  }

  if (currentUserRating) {
    currentUserRating.rating = newRating;
  } else {
    doctor.allRating.push({
      user: user._id,
      rating: newRating,
    });
  }

  let sumRating = 0;

  for (let i = 0; i < doctor.allRating.length; i++) {
    sumRating += doctor.allRating[i].rating;
  }

  doctor.rating = Math.round((sumRating / doctor.allRating.length) * 10) / 10;
  await doctor.save();

  res.status(200).send(doctor);
};

module.exports = updateUserRating;
