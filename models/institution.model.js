const { Schema, model } = require("mongoose");

const institutionSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    image: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Institution = model("Institution", institutionSchema);

module.exports = Institution;
