const { User } = require("../../models/users.model");

const UpdateUserRating = async (req, res) => {
  const user = req.user;
  const newRating = req.body.rating;

  const doctor = await User.findById(req.body.id);
  const currentUserRating = doctor.allRating.find(
    (element) => element.user.toString() === user._id.toString()
  );
  console.log(currentUserRating);

  if (!newRating) {
    if (!currentUserRating) {
      return res.status(200).json({ rating: 0 });
    } else {
      return res.status(200).json({ rating: currentUserRating.rating });
    }
  }

  doctor.allRating.push({
    user: user._id,
    rating: newRating,
  });
  let sumRating = 0;

  for (let i = 0; i < doctor.allRating.length; i++) {
    sumRating += doctor.allRating[i].rating;
  }

  doctor.rating = Math.round((sumRating / doctor.allRating.length) * 10) / 10;
  await doctor.save();

  res.status(200).send(doctor);
};

module.exports = UpdateUserRating;
