const { createError } = require("../../helpers");
const { Appointment } = require("../../models/appointments.model");

const getAppointment = async (req, res, next) => {
  const { id } = req.params;

  const appointment = await Appointment.findById(id);
  if (!appointment) {
    const error = createError(404, "Not found");
    throw error;
  }
  res.status(200).json(appointment);
};

module.exports = getAppointment;
