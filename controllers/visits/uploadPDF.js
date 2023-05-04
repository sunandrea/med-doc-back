const { default: mongoose } = require("mongoose");
const { Visit } = require("../../models/visits.model");

const uploadPDF = async (req, res) => {
  const { id } = req.params;

  try {
    const visitObjectId = mongoose.Types.ObjectId.createFromHexString(id);
    const visit = await Visit.findById(visitObjectId);
    visit.files.push({
      fileName: req.file.originalname,
      fileURL: req.file.path,
    });

    await visit.save();
    res.status(200).json(visit);
  } catch (err) {
    console.error(err);
    res.status(500).json("Помилка завантаження файлу");
  }
};

module.exports = uploadPDF;
