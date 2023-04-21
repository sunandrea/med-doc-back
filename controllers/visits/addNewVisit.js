const { default: mongoose } = require("mongoose");
const { Visit } = require("../../models/visits.model");

const addVisit = async (req, res, next) => {
  const patientObjectId = mongoose.Types.ObjectId.createFromHexString(
    req.body.patient
  );

  const visit = await Visit.create({
    complaints: req.body.complaints,
    medicalHistory: req.body.medicalHistory,
    objectiveCondition: req.body.objectiveCondition,
    associatedDiseases: req.body.associatedDiseases,
    bodyCondition: req.body.bodyCondition,
    clinicalDiagnosis: req.body.clinicalDiagnosis,
    recomendation: req.body.recomendation,
    doctor: req.user._id,
    patient: patientObjectId,
    date: req.body.date,
  });
  res.status(201).json(visit);
};

module.exports = addVisit;
