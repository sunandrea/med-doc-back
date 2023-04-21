const { default: mongoose } = require("mongoose");
const { Visit } = require("../../models/visits.model");

const updateVisit = async (req, res, next) => {
  const { id } = req.params;
  const visitObjectId = mongoose.Types.ObjectId.createFromHexString(id);

  const visit = await Visit.findByIdAndUpdate(visitObjectId, req.body, {
    new: true,
  }).select("-password");
  res.status(200).json(visit);
};

module.exports = updateVisit;
