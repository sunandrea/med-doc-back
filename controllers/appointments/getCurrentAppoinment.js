const { Appointment } = require("../../models/appointments.model");

const getCurrentAppointment = async (req, res, next) => {
  let appointments = [];
  if (req.user.role === "Patient") {
    appointments = await Appointment.find({ patient: req.user._id });
  }
  if (req.user.role === "Doctor") {
    appointments = await Appointment.find({ doctor: req.user._id });
  }
  res.status(200).send(appointments);
};

module.exports = getCurrentAppointment;
