const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  specialization: {
    type: String,
    required: true,
  },
  doctor: {
    type: String,
    required: true,
  },
  patient: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Appointment = model("Appointment", appointmentSchema);

module.exports = { Appointment };
