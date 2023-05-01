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
      ref: "user",
      required: true,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    pdfURL: String,
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
  patient: Joi.string(),
});

const visitUpdateSchema = Joi.object({
  complaints: Joi.string().min(1).optional(),
  medicalHistory: Joi.string().min(1).optional(),
  objectiveCondition: Joi.string().min(1).optional(),
  associatedDiseases: Joi.string().min(1).optional(),
  bodyCondition: Joi.string().min(1).optional(),
  clinicalDiagnosis: Joi.string().min(1).optional(),
  recomendation: Joi.string().min(1).optional(),
  pdfURL: Joi.string(),
});

const Visit = model("visit", visitSchema);
module.exports = { Visit, visitAddSchema, visitUpdateSchema };
