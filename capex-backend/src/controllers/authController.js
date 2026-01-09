const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* ================= REGISTER ================= */
exports.registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      countryCode,
      phone,
      email,
      password,
      confirmPassword,
      agreedToTerms
    } = req.body;

    // 1️⃣ Validation
    if (
      !firstName ||
      !lastName ||
      !countryCode ||
      !phone ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // 2️⃣ Password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match"
      });
    }

    // 3️⃣ Terms checkbox
    if (!agreedToTerms) {
      return res.status(400).json({
        message: "Please accept Terms & Conditions"
      });
    }

    // 4️⃣ Existing user check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists"
      });
    }

    // 5️⃣ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 6️⃣ Save user
    await User.create({
      firstName,
      lastName,
      countryCode,
      phone,
      email,
      password: hashedPassword,
      agreedToTerms
    });

    res.status(201).json({
      message: "Account created successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

/* ================= LOGIN ================= */
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        countryCode: user.countryCode,
        phone: user.phone
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};
