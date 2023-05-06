const { createError } = require("../../helpers");
const { Visit } = require("../../models/visits.model");

const getAllVisits = async (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 0;

  const skipSize = (page - 1) * limit;

  let visits = [];

  if (req.user.role === "Patient") {
    visits = await Visit.find({ patient: req.user._id })
      .skip(skipSize)
      .limit(limit)
      .populate({
        path: "doctor",
        select:
          "name number birthday gender specialization category avatarURL rating",
      })
      .populate({
        path: "patient",
        select:
          "name number birthday gender specialization category avatarURL rating",
      });
  }
  if (req.user.role === "Doctor") {
    visits = await Visit.find({ doctor: req.user._id })
      .skip(skipSize)
      .limit(limit)
      .populate({
        path: "doctor",
        select:
          "name number birthday gender specialization category avatarURL rating",
      })
      .populate({
        path: "patient",
        select:
          "name number birthday gender specialization category avatarURL rating",
      });
  }
  if (!visits) {
    const error = createError(404, "Not Found");
    throw error;
  }
  res.status(200).json(visits);
};

module.exports = getAllVisits;
