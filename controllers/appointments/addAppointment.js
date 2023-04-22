const { default: mongoose } = require("mongoose");
const { Appointment } = require("../../models/appointments.model");

const addAppointment = async (req, res, next) => {
  const doctorObjectId = mongoose.Types.ObjectId.createFromHexString(
    req.body.doctor
  );
  const appointment = await Appointment.create({
    specialization: req.body.specialization,
    doctor: doctorObjectId,
    patient: req.user._id,
    date: req.body.date,
    time: req.body.time,
  });
  res.status(200).json(appointment);
};

module.exports = addAppointment;
