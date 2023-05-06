const { createError } = require("../../helpers");
const { Appointment } = require("../../models/appointments.model");

const getCurrentAppointment = async (req, res, next) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 0;

  const skipSize = (page - 1) * limit;

  let appointments = [];

  if (req.user.role === "Patient") {
    appointments = await Appointment.find({ patient: req.user._id })
      .skip(skipSize)
      .limit(limit)
      .populate(
        "doctor",
        "name avatarURL birthday specialization rating number gender"
      )
      .populate(
        "patient",
        "name avatarURL birthday specialization rating number gender"
      );
  }
  if (req.user.role === "Doctor") {
    appointments = await Appointment.find({ doctor: req.user._id })
      .skip(skipSize)
      .limit(limit)
      .populate(
        "doctor",
        "name avatarURL birthday specialization rating number gender"
      )
      .populate(
        "patient",
        "name avatarURL birthday specialization rating number gender"
      );
  }

  if (!appointments) {
    const error = createError(404, "No appointments");
    throw error;
  }
  res.status(200).json(appointments);
};

module.exports = getCurrentAppointment;
