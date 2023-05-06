const { Schema, model } = require("mongoose");
const Joi = require("joi");

const appointmentSchema = new Schema(
  {
    specialization: {
      type: String,
      required: true,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    patient: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const appointmentAddSchema = Joi.object({
  specialization: Joi.string().required(),
  doctor: Joi.string().required(),
  date: Joi.string().required(),
  patient: Joi.string().optional(),
  time: Joi.string().required(),
});

const Appointment = model("Appointment", appointmentSchema);

module.exports = { Appointment, appointmentAddSchema };
