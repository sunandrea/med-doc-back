const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    number: {
      type: String,
      required: [true, "Number is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },

    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["Patient", "Doctor"],
    },
    rating: {
      type: Number,
    },
    experience: {
      institution: { type: String },
      description: { type: String },
      startDate: { type: String },
      endDate: { type: String },
    },
    token: { type: String },

    avatarURL: {
      type: String,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
