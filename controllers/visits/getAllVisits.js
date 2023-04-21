const { Visit } = require("../../models/visits.model");

const getAllVisits = async (req, res, next) => {
  //   const page = req.query.page || 1;
  //   const limit = req.query.limit || 0;
  //   const query = { patient: req.user._id };

  let visits;
  //   if (limit > 0) {
  //     const skipSize = (page - 1) * limit;
  //     visits = await Visit.find(query)
  //       .populate("patient", "-password")
  //       .skip(skipSize)
  //       .limit(limit);
  //   }
  if (req.user.role === "Patient") {
    visits = await Visit.find({ patient: req.user._id })
      .populate({ path: "doctor", select: "name number" })
      .populate({ path: "patient", select: "name number" });
  }
  if (req.user.role === "Doctor") {
    visits = await Visit.find({ doctor: req.user._id })
      .populate({ path: "doctor", select: "name number" })
      .populate({ path: "patient", select: "name number" });
  }
  console.log(visits);
  res.status(200).json(visits);
};

module.exports = getAllVisits;
