const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },

    lastName: {
      type: String,
      required: true,
      trim: true
    },

    countryCode: {
      type: String,
      required: true,
      enum: ["+91", "+1", "+44", "+61", "+971"]
    },

    phone: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true
    },

    agreedToTerms: {
      type: Boolean,
      required: true
    },

    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
