const { default: mongoose } = require("mongoose");
const { Visit } = require("../../models/visits.model");

const uploadPDF = async (req, res) => {
  const { id } = req.params;

  try {
    const visitObjectId = mongoose.Types.ObjectId.createFromHexString(id);
    await Visit.findByIdAndUpdate(
      visitObjectId,
      { $set: { pdfURL: req.file.path } },
      {
        new: true,
      }
    ).select("-password");

    res.status(200).json("Файл успішно завантажено");
  } catch (err) {
    console.error(err);
    res.status(500).json("Помилка завантаження файлу");
  }
};

module.exports = uploadPDF;

// const visitObjectId = mongoose.Types.ObjectId.createFromHexString(id);

// const visit = await Visit.findByIdAndUpdate(
//   visitObjectId,
//   { $set: { pdfURL: req.file.path } },
//   {
//     new: true,
//   }
// ).select("-password");

// res.status(200).json(visit);
