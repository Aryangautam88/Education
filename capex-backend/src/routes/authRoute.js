const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser
} = require("../controllers/authController");

const authMiddleware = require("../middlewares/authMiddleware");

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected example route
router.get("/me", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Authorized user",
    userId: req.user.userId
  });
});

module.exports = router;
