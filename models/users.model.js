const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
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
    coast: {
      type: Number,
    },
    about: {
      type: String,
    },
    specialization: {
      type: String,
    },
    category: {
      type: String,
    },
    gender: {
      type: String,
    },
    birthday: {
      type: Date,
    },

    allRating: [
      {
        user: Schema.Types.ObjectId,
        rating: Number,
      },
    ],

    experience: [
      {
        institution: { type: String },
        description: { type: String },
        startDate: { type: String },
        endDate: { type: String },
      },
    ],
    token: String,

    avatarURL: String,

    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  number: Joi.string().required(),
  password: Joi.string().min(3).required(),
  role: Joi.string().valid("Doctor", "Patient").required(),
});

const loginSchema = Joi.object({
  number: Joi.string().required(),
  password: Joi.string().min(3).required(),
});

const updateUserSchema = Joi.object({
  name: Joi.string().optional(),
  gender: Joi.string().optional(),
  birthday: Joi.string().optional(),
  number: Joi.string().optional(),
  about: Joi.string().optional(),
  specialization: Joi.string().optional(),
  category: Joi.string().optional(),
});

const User = model("user", userSchema);
module.exports = { User, registerSchema, loginSchema, updateUserSchema };
