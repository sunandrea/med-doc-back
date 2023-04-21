const { Schema, model } = require("mongoose");
const Joi = require("joi");
const visitSchema = Schema(
  {
    complaints: {
      type: String,
      required: true,
    },
    medicalHistory: {
      type: String,
      required: true,
    },
    objectiveCondition: {
      type: String,
      required: true,
    },
    associatedDiseases: {
      type: String,
      required: true,
    },
    bodyCondition: {
      type: String,
      required: true,
    },
    clinicalDiagnosis: {
      type: String,
      required: true,
    },
    recomendation: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
    patient: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

const visitAddSchema = Joi.object({
  complaints: Joi.string().required().min(1),
  medicalHistory: Joi.string().required().min(1),
  objectiveCondition: Joi.string().required().min(1),
  associatedDiseases: Joi.string().required().min(1),
  bodyCondition: Joi.string().required().min(1),
  clinicalDiagnosis: Joi.string().required().min(1),
  recomendation: Joi.string().required().min(1),
  date: Joi.date().min(1),
});

const Visit = model("visit", visitSchema);
module.exports = { Visit, visitAddSchema };
