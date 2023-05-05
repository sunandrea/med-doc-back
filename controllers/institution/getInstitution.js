const { createError } = require("../../helpers");
const Institution = require("../../models/institution.model");

const getInstitution = async (req, res, next) => {
  const institution = await Institution.find();

  if (!institution) {
    const error = createError(404, "Not Found");
    throw error;
  }

  res.status(200).json(institution);
};

module.exports = getInstitution;
