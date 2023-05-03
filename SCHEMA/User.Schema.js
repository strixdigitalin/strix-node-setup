const mongoose = require("mongoose");
const { default: isEmail } = require("validator/lib/isemail");

const ObjectId = mongoose.Schema.Types.ObjectId;

const BaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      unique: true,
    },
    number: { type: Number, default: null },
    email: { type: String, required: [isEmail, "email is required"] },
    role: { type: String, enum: ["admin", "freelancer", "employer"] },
    // role: { type: String, enum: ["admin", "freelancer", "employer"] },
    password: { type: String },
    skills: [],
    about: String,
    portfolio: [
      {
        title: String,
        description: String,
        link: String,
        media: [],
      },
    ],
  },
  { timestamps: true }
);

module.exports = new mongoose.model("user", BaseSchema);
