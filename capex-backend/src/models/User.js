const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
      minlength: 2
    },

    countryCode: {
      type: String,
      required: true,
      enum: ["+91", "+1", "+44", "+61", "+971"]
    },

    phone: {
      type: String,
      required: true,
      match: [/^[0-9]{7,15}$/, "Invalid phone number"]
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Invalid email address"
      ]
    },

    password: {
      type: String,
      required: function () {
        return this.provider === "local";
      }
    },

    agreedToTerms: {
      type: Boolean,
      required: function () {
        return this.provider === "local";
      }
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
