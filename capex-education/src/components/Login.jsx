import { useState } from "react";
import "./Login.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  /* 🔔 ERROR CARD */
  const showError = (msg) => {
    setError(msg);
    setTimeout(() => setError(""), 3000);
  };

  /* ✅ SUCCESS CARD + REDIRECT */
  const showSuccess = (msg) => {
    setSuccess(msg);
    setTimeout(() => {
      setSuccess("");
      window.location.href = "/"; // or "/dashboard"
    }, 1000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return showError("Email and password are required");
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      localStorage.setItem("token", data.token);

      showSuccess("Login successful 🎉");

    } catch (err) {
      showError(err.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    showError("Google login coming soon");
  };

  return (
    <div className="login-page">

      {/* 🔔 ERROR CARD */}
      {error && <div className="error-card">{error}</div>}

      {/* ✅ SUCCESS CARD */}
      {success && <div className="success-card1">{success}</div>}

      {/* BACKGROUND */}
      <picture className="login-bg">
        <source media="(max-width: 768px)" srcSet="/phone_bg.png" />
        <img src="/laptop_bg.png" alt="background" />
      </picture>

      {/* CARD */}
      <div className="login-card split-card">

        {/* LEFT SIDE */}
        <div className="card-left">
          <img src="/login.png" alt="Illustration" />
        </div>

        {/* RIGHT SIDE */}
        <div className="card-right">
          <img src="/logo.png" alt="KnowledgePulse" className="login-logo" />

          <h2>Welcome Back 👋</h2>
          <p className="subtitle">
            Sign in to continue your learning journey
          </p>

          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className={`eye ${showPassword ? "active" : ""}`}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <a href="/forgot-password" className="forgot">
            Forgot password?
          </a>

          <button className="google-btn" onClick={handleGoogleLogin}>
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
            />
            Continue with Google
          </button>

          <p className="disclaimer">
            All content is for educational purposes only.<br />
            Forex trading involves risk.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;
